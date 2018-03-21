import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { LongList } from '../../..';
import { ContentListItem, ContentListCategory } from '..';

const rowStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
}

class ContentListComponent extends PureComponent {
  static propTypes = {
    content: ImmutablePropTypes.list.isRequired,
    getContent: PropTypes.func.isRequired,
    getList: PropTypes.func.isRequired,
    hideLoading: PropTypes.func.isRequired,
    getIndex: PropTypes.func.isRequired,
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
    const { id } = this.props.navigation.state.params;
    const { getContent, hideLoading, getList, comic_id } = this.props;
    let chapter_id = id;
    if (!+id) { // 如果没有传过来chapter_id则从list中取id
      const res = await getList(comic_id);
      chapter_id = res.action.payload.data[0].data[0].id
    }
    await getContent(chapter_id);
    hideLoading();
  };
  render() {
    const content = this.props.content.toJS();
    return (
      <LongList
         list={content}
         Item={ContentListItem}
         customkey="index"
       />
    );
  }
}

export default ContentListComponent;
