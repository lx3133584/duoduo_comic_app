import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { ComicListItem, ComicListCategory } from '..';
import { LongList } from '../../..';

const rowStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
}

class ComicListComponent extends PureComponent {
  static propTypes = {
    list: ImmutablePropTypes.list.isRequired,
    detail: ImmutablePropTypes.map.isRequired,
    getList: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      state: PropTypes.shape({
        params: PropTypes.object.isRequired,
      }),
    }),
  };
  constructor(props) {
    super(props);
    this.navigate = props.navigation.navigate.bind(this);
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
  _renderItem({ item }) {
    const { Item, itemOnPress, itemOnLongPress } = this.props;
    return <Item {...item} itemOnPress={itemOnPress} itemOnLongPress={itemOnLongPress} />
  };
  render() {
    const { list } = this.props;
    return (
      <View>
        {
          list.map(item => {
            const { id, name, chapters } = item;
            return <ComicListCategory title={name} key={id}>
            <LongList
               list={chapters}
               columnWrapperStyle={rowStyle}
               Item={ComicListItem}
               itemOnPress={this.navigate}
               numColumns={9999999}
             />
          </ComicListCategory>
          })
        }
      </View>
    );
  }
}

export default ComicListComponent;
