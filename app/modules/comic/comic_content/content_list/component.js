import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import Toast from 'react-native-root-toast';
import { TouchableWithoutFeedback, Image, View } from 'react-native';
import { ContentListScroll } from '..';
import { getImgHeight } from '../../../../utils';
const prefetch = Image.prefetch;
const page_size = 5;
const pre_num = 3;
class ContentListComponent extends Component {
  static propTypes = {
    pre_content: ImmutablePropTypes.list.isRequired,
    content_index: PropTypes.number,
    getContent: PropTypes.func.isRequired,
    preContent: PropTypes.func.isRequired,
    postHistory: PropTypes.func.isRequired,
    getList: PropTypes.func.isRequired,
    hideLoading: PropTypes.func.isRequired,
    saveIndex: PropTypes.func.isRequired,
    saveTitle: PropTypes.func.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
    comic_id: PropTypes.number,
    chapter_id: PropTypes.number,
    navigation: PropTypes.shape({
      addListener: PropTypes.func.isRequired,
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
  componentWillReceiveProps(nextProps) {
    if (nextProps.go_to_flag !== this.props.go_to_flag) {
      this.goToIndex(nextProps.content_index);
    }
  };
  init = async () => {
    const { chapter_id: id, title, pre } = this.props.navigation.state.params;
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
    } else {
      let offset = 0;
      if (chapter_id === this.chapter_id) {
        this.page = Math.floor((content_index + 1) / (page_size + 0.000001));
        this.offset_index = this.page * page_size;
        offset = content_index % page_size;
      } else {
        this.onRefresh(0, true);
      }
      await this.goPage({ page: this.page, offset, init: true });
      this.scrollTo(offset);
      if (offset > page_size - pre_num) {
        await this.goPage({ page: ++this.page, offset: 0, init: false }); // 如果后面不足3张图片则加载下一页
      }
    }
    hideLoading();
  };
  goToIndex = async (index) => { // 跳页
    const page = Math.floor((index + 1) / (page_size + 0.000001));
    const offset = index % page_size;
    if (page !== this.page) {
      this.page = page;
      this.offset_index = this.page * page_size;
      await this.goPage({ page: this.page, offset, init: true });
    }
    this.scrollTo(offset);
  };
  scrollTo = index => {
    if (!this.content_list_ref || !this.content_list_ref.scrollTo) return;
    setTimeout(() => {
      this.content_list_ref.scrollTo(index);
    }, 0);
  }
  getChapterFromList = async () => { // 从目录中取第一个章节
    const { getList, comic_id } = this.props;
    const res = await getList(comic_id);
    return res.value.data[0].data[0];
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
  onRefresh = (page, init) => {
    const { saveIndex } = this.props;
    if (!init) return;
    saveIndex(0);
    this.page = 0;
    this.offset_index = 0;
  };
  onFetch = async (page, init = false) => {
    const { getContent } = this.props;
    return await getContent({ id: this.chapter_id, page, init, pre: false });
  };
  _getRef = ref => this.content_list_ref = ref;
  render() {
    const { toggleDrawer } = this.props;
    const ContentList = ContentListScroll;
    return (
      <TouchableWithoutFeedback onPress={toggleDrawer}>
        <View>
          <ContentList
            getRef={this._getRef}
            offset={this.offset_index}
            page={this.page}
            onFetch={this.onFetch}
            onRefresh={this.onRefresh}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ContentListComponent;
