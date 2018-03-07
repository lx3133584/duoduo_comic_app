import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import styled from "styled-components";
import PropTypes from 'prop-types';

const ContainStyled = styled.View`
  margin: 10px 0;
`
const TextStyled = styled.Text`
  text-align: center;
`

function FooterComponent() {
  return (
    <ContainStyled>
      <TextStyled>已无更多数据</TextStyled>
    </ContainStyled>
  )
}
function ListEmptyComponent() {
  return (
    <ContainStyled>
      <TextStyled>暂无数据</TextStyled>
    </ContainStyled>
  )
}
class LongListComponent extends PureComponent {
  static propTypes = {
    initPage: PropTypes.number,
    customkey: PropTypes.string,
    Item: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]).isRequired,
    list: PropTypes.array.isRequired,
    onFetch: PropTypes.func.isRequired,
    callback: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    const { initPage, customkey } = props;
    this.state = {
      loading: false,
    }
    this.page = initPage || 0;
    this.customkey = customkey || 'title';
    this._onRefresh = this._onRefresh.bind(this);
    this._onFetch = this._onFetch.bind(this);
    this._renderItem = this._renderItem.bind(this);
  };
  _keyExtractor(item, index) {
    return item[this.customkey]
  };
  async _onRefresh() {
    this.page = 0;
    await this._onFetch()
  }
  async _onFetch() {
    const { onFetch, callback } = this.props;
    this.setState({ loading: true });
    await onFetch(this.page);
    callback(this.page);
    this.page++;
    this.setState({ loading: false });
  };
  _renderItem({ item }) {
    const { Item } = this.props;
    return <Item {...item} />
  };
  render() {
    const { list } = this.props;
    const { loading } = this.state;
    return (
      <FlatList
         data={list}
         keyExtractor={this._keyExtractor}
         renderItem={this._renderItem}
         onEndReached={this._onFetch}
         onEndReachedThreshold={0.5}
         onRefresh={this._onRefresh}
         refreshing={loading}
         ListEmptyComponent={ListEmptyComponent}
         ListFooterComponent={FooterComponent}
       />
    );
  }
}

export default LongListComponent;
