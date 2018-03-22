import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { SectionList, Dimensions } from 'react-native';
import { ComicListItem, ComicListCategory, Progress } from '..';
import styled from "styled-components";
import { wrapWithLoading } from '../../../../utils';
const { height } = Dimensions.get('window');

const rowStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
}

const ItemSeparatorComponent = styled.View`
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
`

class ComicListComponent extends PureComponent {
  static propTypes = {
    list: ImmutablePropTypes.list.isRequired,
    chapter_id: PropTypes.number,
    getList: PropTypes.func.isRequired,
    hideLoading: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
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
    const { getList, hideLoading } = this.props;
    await getList(id);
    hideLoading();
  };
  _keyExtractor(item, index) {
    return item.id + '';
  };
  _getItemLayout(data, index) {
    let len = 0;
    let offset = 40;
    data.forEach(({ data }, index) => { // 计算分类标题高度
      len += data.length;
      if (index < len) return;
      offset += 40;
    })
    return {length: 41, offset: 41 * index + offset, index}
  };
  render() {
    const { list, chapter_id, loading } = this.props;
    if (loading) return <Progress />;
    const data = list.toJS();
    const initNumber = Math.ceil(height / 40);
    return (
      <SectionList
        renderItem={({ item }) => <ComicListItem {...item} itemOnPress={this.navigate} active={item.id === chapter_id} />}
        renderSectionHeader={({ section }) => <ComicListCategory>{section.name}</ComicListCategory>}
        ItemSeparatorComponent={ItemSeparatorComponent}
        keyExtractor={this._keyExtractor}
        initialNumToRender={initNumber}
        sections={data}
        getItemLayout={this._getItemLayout}
      />
    );
  }
}

export default wrapWithLoading(ComicListComponent);
