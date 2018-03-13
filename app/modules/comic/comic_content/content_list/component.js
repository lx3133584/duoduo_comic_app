import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
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
    const { getContent } = this.props;
    return await getContent(id);
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
