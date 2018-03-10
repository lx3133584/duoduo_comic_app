import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { LongList, ListItem } from '..';

class SearchListComponent extends PureComponent {
  static propTypes = {
    search: PropTypes.func.isRequired,
    list: ImmutablePropTypes.list.isRequired,
    keyword: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }),
  };
  constructor(props) {
    super(props);
    this.onFetch = this.onFetch.bind(this);
    this.navigate = props.navigation.navigate.bind(this);
  };
  async onFetch(page) {
    const { keyword, search } = this.props;
    return await search({ page, keyword });
  };
  render() {
    const list = this.props.list.toJS();
    return (
      <LongList
         list={list}
         Item={ListItem}
         onFetch={this.onFetch}
         itemOnPress={this.navigate}
         isLong
       />
    );
  }
}

export default SearchListComponent;
