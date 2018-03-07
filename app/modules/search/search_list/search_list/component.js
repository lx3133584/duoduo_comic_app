import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { LongList, ListItem } from '..';

class SearchListComponent extends PureComponent {
  static propTypes = {
    search: PropTypes.func.isRequired,
    list: ImmutablePropTypes.list.isRequired,
    keyword: PropTypes.string.isRequired,
  };
  constructor() {
    super();
    this.onFetch = this.onFetch.bind(this);
  };
  async onFetch(page) {
    const { keyword, search } = this.props;
    await search({ page, keyword });
  };
  callback(page) {
  }
  render() {
    const list = this.props.list.toJS();
    return (
      <LongList
         list={list}
         Item={ListItem}
         onFetch={this.onFetch}
         callback={this.callback}
       />
    );
  }
}

export default SearchListComponent;
