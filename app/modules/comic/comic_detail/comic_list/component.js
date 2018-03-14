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
  async onFetch() {
    const { id } = this.props.navigation.state.params;
    const { getList } = this.props;
    return await getList(id);
  };
  render() {
    const { list } = this.props;
    const { detail } = this.props;
    const chapter_id = detail.get('chapter_id');
    return (
      <View>
        {
          list.map(item => {
            const { id, name, chapters } = item;
            return <ComicListCategory title={name} key={id}>
            <LongList
               list={chapters}
               columnWrapperStyle={rowStyle}
               Item={item => <ComicListItem {...item} active={item.id === chapter_id} />}
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
