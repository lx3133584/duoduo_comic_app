import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { FlatList, Image } from 'react-native';
import { LongList } from '../../..';
import { ContentListItem, ContentListCategory, ContentListFooter } from '..';
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
    this.onFetch = this.onFetch.bind(this);
  };
  componentDidMount() {
    this.onFetch();
  };
  async onFetch() {
    const { id, title } = this.props.navigation.state.params;
    const { getContent, preContent, hideLoading, getList, comic_id, saveTitle, pre_content } = this.props;
    let chapter_id = id;
    let cur_chapter = title;
    if (!+id) { // 如果chapter_id位null则从list中取
      const res = await getList(comic_id);
      const { id, title } = res.action.payload.data[0].data[0];
      chapter_id = id;
      cur_chapter = title;
    }
    saveTitle(cur_chapter);
    if (pre_content.size) {
      preContent(chapter_id);
    } else {
      const { value } = await getContent({ id: chapter_id });
      for (const { url } of value.result.data.slice(0, 3)) { // 前三张图片都显示出来才结束loading
        await prefetch(url);
      }
    }
    hideLoading();
  };
  onScroll = (props) => {
    for (const key in props) {
      // console.log(key, props[key]);
    }
  };
  render() {
    const content = this.props.content.toJS();
    return (
      <LongList
         list={content}
         Item={ContentListItem}
         customkey="index"
         ListFooterComponent={ContentListFooter}
       />
    );
  }
}

export default ContentListComponent;
