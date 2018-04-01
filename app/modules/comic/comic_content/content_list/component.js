import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { FlatList, Image, Dimensions } from 'react-native';
import { LongList } from '../../..';
import { ContentListItem, ContentListFooter } from '..';
const { width } = Dimensions.get('window');
const prefetch = Image.prefetch;
const page_size = 5;
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
    pre_content: ImmutablePropTypes.list.isRequired,
    content_index: PropTypes.number,
    getContent: PropTypes.func.isRequired,
    preContent: PropTypes.func.isRequired,
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
  };
  componentDidMount() {
    this.init();
  };
  shouldComponentUpdate(nextProps) {
    return nextProps.content !== this.props.content;
  };
  init = async () => {
    const { id, title, pre } = this.props.navigation.state.params;
    const {
      getContent,
      preContent,
      hideLoading,
      getList,
      comic_id,
      saveTitle,
      pre_content,
      content_index,
      chapter_id,
    } = this.props;
    this.chapter_id = id;
    let cur_chapter = title;
    if (!+id) { // 如果chapter_id为null则从list中取
      const res = await getList(comic_id);
      const { id, title } = res.action.payload.data[0].data[0];
      this.chapter_id = id;
      cur_chapter = title;
    }
    saveTitle(cur_chapter);
    if (pre && pre_content.size) {
      preContent(this.chapter_id);
    } else {
      // this.init_page = (chapter_id === this.chapter_id )
      //   ? Math.floor(content_index / page_size)
      //   : 0;
      const { value } = await getContent({ id: this.chapter_id, page: 0 });
      const data = value.result.data.slice(0, 3);
      const tasks = data.map(item => prefetch(item.url));
      await Promise.all(tasks);  // 前三张图片都显示出来才结束loading
    }
    // content_index && this.content_ref && this.content_ref.scrollToIndex({
    //   viewPosition: 0,
    //   index: content_index % page_size,
    //   animated: false,
    //   viewOffset: false,
    // });
    hideLoading();
  };
  onFetch = async (page) => {
    const { getContent } = this.props;
    return await getContent({ page, id: this.chapter_id });
  };
  getHeight = ({ height: itemHeight, width: itemWidth }) => {
    return itemHeight / itemWidth * width;
  };
  onScroll = (e) => {
    const { saveIndex, content, content_index } = this.props;
    const scrollY = e.nativeEvent.contentOffset.y;
    let offset = 0;
    let index = 0;
    content.forEach((t, i) => {
      if (scrollY > offset) index = i;
      offset += this.getHeight(t.size);
    })
    if (index !== content_index) saveIndex(index);
  };
  _getItemLayout = (data, index) => {
    let offset = 0;
    const item = data[index];
    data.forEach((t, i) => {
      if (i < index) offset += this.getHeight(t.size);
    })
    return { length: this.getHeight(item.size), offset, index };
  };
  _getRef = ref => this.content_ref = ref;
  render() {
    const { content } = this.props;
    return (
      <LongList
         getRef={this._getRef}
         list={content}
         Item={ContentListItem}
         customkey="index"
         onFetch={this.onFetch}
         onScroll={this.onScroll}
         ListFooterComponent={ContentListFooter}
         getItemLayout={this._getItemLayout}
         initialNumToRender={3}
         initPage={1}
         isLong
       />
    );
  }
}

export default ContentListComponent;
