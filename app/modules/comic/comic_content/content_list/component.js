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
    hideLoading: PropTypes.func.isRequired,
    getIndex: PropTypes.func.isRequired,
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
  async onFetch() {
    const { id } = this.props.navigation.state.params;
    const { getContent, hideLoading } = this.props;
    await getContent(id);
    hideLoading();
  };
  render() {
    const content = this.props.content.toJS();
    return (
      <LongList
         list={content}
         Item={ContentListItem}
         onFetch={this.onFetch}
         isLong
         customkey="index"
       />
    );
  }
}

export default ContentListComponent;
