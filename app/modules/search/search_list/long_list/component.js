import React, { PureComponent } from 'react';
import { FlatList, Vibration } from 'react-native';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { ListEmpty } from '..';

const ContainStyled = styled.View`
  margin: 10px 0;
`
const TextStyled = styled.Text`
  text-align: center;
`
const pattern = [0, 20];

function FooterComponent({text}) {
  return (
    <ContainStyled>
      <TextStyled>{text || '下面什么都没有了哦.'}</TextStyled>
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
    onFetch: PropTypes.func,
    callback: PropTypes.func,
    isLong: PropTypes.bool,
    horizontal: PropTypes.bool,
    numColumns: PropTypes.number,
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
    this._keyExtractor = this._keyExtractor.bind(this);
    this._itemOnLongPress = this._itemOnLongPress.bind(this);
  };
  _keyExtractor(item, index) {
    return item[this.customkey] + '';
  };
  async _onRefresh() {
    this.page = 0;
    await this._onFetch()
  }
  _onFetch() {
    const { onFetch, callback } = this.props;
    if (!onFetch) return;
    this.setState({ loading: true });
    onFetch(this.page).then(res => {
      this.setState({ loading: false });
      if (!res.error) {
        callback && callback(this.page);
        this.page++;
      }
    }).catch(e => {
      this.setState({ loading: false });
    });
  };
  _itemOnLongPress(...params) {
    Vibration.vibrate(pattern);
    const { itemOnLongPress } = this.props;
    itemOnLongPress(...params)
  };
  _renderItem({ item }) {
    const { Item, itemOnPress } = this.props;
    return <Item {...item} itemOnPress={itemOnPress} itemOnLongPress={this._itemOnLongPress} />
  };
  render() {
    const { list, isLong, showFooter, emptyText } = this.props;
    const { loading } = this.state;
    return (
      <FlatList
         {...this.props}
         data={list}
         keyExtractor={this._keyExtractor}
         renderItem={this._renderItem}
         onEndReached={isLong && this._onFetch}
         onEndReachedThreshold={0.6}
         onRefresh={this._onRefresh}
         refreshing={loading}
         ListEmptyComponent={() => <ListEmpty text={emptyText} />}
         ListFooterComponent={showFooter && list.length && FooterComponent}
       />
    );
  }
}

export default LongListComponent;
