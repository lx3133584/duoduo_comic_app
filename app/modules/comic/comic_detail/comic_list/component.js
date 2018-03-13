import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { ComicListItem, ComicListCategory } from '..';

const rowStyle = {
  justifyContent: 'space-around',
  flexDirection: 'row',
  flexWrap: 'wrap',
}

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
  _keyExtractor: (item, index) => item.id;
  async onFetch() {
    const { id } = this.props.navigation.state.params;
    const { getList } = this.props;
    return await getList(id);
  };
  render() {
    const { list } = this.props;
    return (
      <View>
        {
          list.map(item => {
            const { id, name, chapters } = item;
            return <ComicListCategory title={name} key={id}>
            <FlatList
              data={chapters}
              columnWrapperStyle={rowStyle}
              keyExtractor={this._keyExtractor}
              numColumns={9999999}
              renderItem={ComicListItem}
            />
          </ComicListCategory>
          })
        }
      </View>
    );
  }
}

export default ComicListComponent;
