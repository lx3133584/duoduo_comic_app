import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import Toast from 'react-native-root-toast';
import { FlatList, Image } from 'react-native';
import { LongList } from '../../..';
import { ContentListItem, ContentListFooter } from '..';
import { getImgHeight } from '../../../../utils';
const prefetch = Image.prefetch;
const page_size = 5;
const pre_num = 3;
class ContentListComponent extends Component {
  static propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      index: PropTypes.number,
      size: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
      }),
    })).isRequired,
    img_positon_arr: ImmutablePropTypes.list.isRequired,
    pre_content: ImmutablePropTypes.list.isRequired,
    content_index: PropTypes.number,
    getContent: PropTypes.func.isRequired,
    preContent: PropTypes.func.isRequired,
    postHistory: PropTypes.func.isRequired,
    getList: PropTypes.func.isRequired,
    hideLoading: PropTypes.func.isRequired,
    saveIndex: PropTypes.func.isRequired,
    saveTitle: PropTypes.func.isRequired,
    comic_id: PropTypes.number,
    chapter_id: PropTypes.number,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      state: PropTypes.shape({
        params: PropTypes.object.isRequired,
      }),
    }),
  };
  constructor() {
    super();
    this.chapter_id = 0; // 本章节ID
    this.page = 0; // 续读页码
    this.offset_index = 0; // 续读后偏移的index
  };
  state = {
    initialized: false, // 是否初始化完成
  };
  componentDidMount() {
    this.init();
    this.willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      () => {
        const { content_index, postHistory } = this.props;
        postHistory({ chapter_id: this.chapter_id, index: content_index })
      }
    );
  };
  componentWillUnmount() {
    this.willBlurSubscription.remove();
  };
  shouldComponentUpdate(nextProps) {
    return nextProps.content !== this.props.content;
  };
  init = async () => {
    const { id, title, pre } = this.props.navigation.state.params;
    const {
      preContent,
      hideLoading,
      saveTitle,
      pre_content,
      content_index,
      chapter_id,
      saveIndex,
    } = this.props;
    this.chapter_id = id;
    let cur_chapter = title;
    if (!+id) { // 如果chapter_id为null则从list中取
      const { id, title } = await this.getChapterFromList();
      this.chapter_id = id;
      cur_chapter = title;
    }
    saveTitle(cur_chapter);
    if (pre && pre_content.size) {
      preContent(this.chapter_id);
      this.setState({ initialized: true });
    } else {
      let offset = 0;
      if (chapter_id === this.chapter_id) {
        this.page = Math.floor((content_index + 1) / (page_size + 0.000001));
        this.offset_index = this.page * page_size;
        offset = content_index % page_size;
      } else {
        this.onRefresh(0, true);
      }
      this.setState({ initialized: true }); // 初始化完成
      await this.goPage({ page: this.page, offset, init: true });
      if (offset > page_size - pre_num) {
        await this.goPage({ page: ++this.page, offset: 0, init: false }); // 如果后面不足3张图片则加载下一页
      }
      this.scrollTo(offset);
    }
    hideLoading();
  };
  getChapterFromList = async () => {
    const { getList, comic_id } = this.props;
    const res = await getList(comic_id);
    return res.action.payload.data[0].data[0];
  };
  goPage = async ({ page, offset, init }) => {
    const { value } = await this.onFetch(page, init);
    const data = value.result.data.slice(offset, offset + pre_num);
    const tasks = data.map(item => prefetch(item.url));
    try {
      await Promise.all(tasks);  // 前三张图片都显示出来才结束loading
    } catch(e) {
      Toast.show('图片加载失败', {
        position: -70,
      });
    }
  };
  scrollTo = index => {
    index > 0 && this.content_ref && this.content_ref.scrollToIndex({
      viewPosition: 0,
      index,
      animated: false,
      viewOffset: false,
    });
  };
  onFetch = async (page, init = false) => {
    const { getContent } = this.props;
    return await getContent({ id: this.chapter_id, page, init, pre: false });
  };
  onRefresh = (page, init) => {
    const { saveIndex } = this.props;
    if (!init) return;
    saveIndex(0);
    this.page = 0;
    this.offset_index = 0;
  };
  onScroll = (e) => {
    const { saveIndex, content, content_index, img_positon_arr } = this.props;
    const scrollY = e.nativeEvent.contentOffset.y;
    let index = 0;
    for (let len = img_positon_arr.size, i = len - 1; i >= 0; i--) {
      if (scrollY > img_positon_arr.get(i)) {
        index = i;
        break;
      }
    }
    if (index !== content_index - this.offset_index) saveIndex(index + this.offset_index);
  };
  _getItemLayout = (data, index) => {
    const { img_positon_arr } = this.props;
    const item = data[index];
    const length = getImgHeight(item.size);
    const offset = img_positon_arr.get(index);
    return { length, offset, index };
  };
  _getRef = ref => this.content_ref = ref;
  render() {
    const { content } = this.props;
    const { initialized } = this.state;
    return (
      initialized && <LongList
         getRef={this._getRef}
         list={content}
         Item={ContentListItem}
         customkey="index"
         onFetch={this.onFetch}
         onScroll={this.onScroll}
         ListFooterComponent={ContentListFooter}
         getItemLayout={this._getItemLayout}
         initialNumToRender={pre_num}
         page={this.page + 1}
         callback={this.onRefresh}
         isLong
       />
    );
  }
}

export default ContentListComponent;
