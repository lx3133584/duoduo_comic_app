import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { ComicListItem, ComicListCategory, Progress } from '..';
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
  state = {
    show: false,
  }
  componentDidMount() {
    this.onFetch();
  };
  async onFetch() {
    const { id } = this.props.navigation.state.params;
    const { getList } = this.props;
    await getList(id);
    this.setState({ show: true })
  };
  render() {
    const { list, detail } = this.props;
    const { show } = this.state;
    const chapter_id = detail.get('chapter_id');
    if (!show) return <Progress />
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
