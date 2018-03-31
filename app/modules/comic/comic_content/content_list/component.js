import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { FlatList, Image, Dimensions } from 'react-native';
import { LongList } from '../../..';
import { ContentListItem, ContentListCategory, ContentListFooter } from '..';
const { width, height } = Dimensions.get('window');
const prefetch = Image.prefetch;

const rowStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
}

class ContentListComponent extends PureComponent {
  static propTypes = {
    content: ImmutablePropTypes.list.isRequired,
    pre_content: ImmutablePropTypes.list.isRequired,
    getContent: PropTypes.func.isRequired,
    preContent: PropTypes.func.isRequired,
    getList: PropTypes.func.isRequired,
    hideLoading: PropTypes.func.isRequired,
    saveIndex: PropTypes.func.isRequired,
    saveTitle: PropTypes.func.isRequired,
    comic_id: PropTypes.number,
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
  init = async () => {
    const { id, title, pre } = this.props.navigation.state.params;
    const { getContent, preContent, hideLoading, getList, comic_id, saveTitle, pre_content } = this.props;
    this.chapter_id = id;
    let cur_chapter = title;
    if (!+id) { // 如果chapter_id位null则从list中取
      const res = await getList(comic_id);
      const { id, title } = res.action.payload.data[0].data[0];
      this.chapter_id = id;
      cur_chapter = title;
    }
    saveTitle(cur_chapter);
    if (pre && pre_content.size) {
      preContent(this.chapter_id);
    } else {
      const { value } = await getContent({ id: this.chapter_id, page: 0 });
      const data = value.result.data.slice(0, 3);
      const tasks = data.map(item => prefetch(item.url));
      await Promise.all(tasks);  // 前三张图片都显示出来才结束loading
    }
    hideLoading();
  };
  onFetch = async (page) => {
    const { getContent } = this.props;
    return await getContent({ page, id: this.chapter_id });
  };
  _getItemLayout = (data, index) => {
    let offset = 0;
    const item = data[index];
    data.forEach((t, i) => {
      if (i < index) offset += t.size.height / t.size.width * width;
    })
    return { length: item.size.height / item.size.width * width, offset, index }
  };
  render() {
    const content = this.props.content.toJS();
    return (
      <LongList
         list={content}
         Item={ContentListItem}
         customkey="index"
         onFetch={this.onFetch}
         ListFooterComponent={ContentListFooter}
         getItemLayout={this._getItemLayout}
         initialNumToRender={3}
         removeClippedSubviews={false}
         isLong
       />
    );
  }
}

export default ContentListComponent;
