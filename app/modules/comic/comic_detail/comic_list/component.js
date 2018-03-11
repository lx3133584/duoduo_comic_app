import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { View } from 'react-native';
import { ComicListItem, ComicListCategory } from '..';

class ComicListComponent extends PureComponent {
  static propTypes = {
    list: ImmutablePropTypes.list.isRequired,
    getList: PropTypes.func.isRequired,
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
    this.onFetch();
  };
  async onFetch() {
    const { id } = this.props.navigation.state.params;
    const { getList } = this.props;
    return await getList(id);
  };
  render() {
    const { list } = this.props;
    return (
      <View>
        {list.map(({id, name, chapters}) => <ComicListCategory
            title={name}
            key={id}
          >
            {chapters.map(item => <ComicListItem {...item} key={item.id} />)}
          </ComicListCategory>
        )}
      </View>
    );
  }
}

export default ComicListComponent;
