import React, { PureComponent } from 'react';
import { Dimensions, FlatList, Vibration } from 'react-native';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { ListEmpty } from '..';
const { height } = Dimensions.get('window');

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
  _onRefresh() {
    this.page = 0;
    this._onFetch();
  };
  _onFetch() {
    const { onFetch, callback } = this.props;
    if (!onFetch) return;
    const { loading } = this.state;
    if (loading) return;
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
    const { itemOnLongPress = f => f } = this.props;
    itemOnLongPress(...params);
  };
  _renderItem({ item }) {
    const { Item, itemOnPress = f => f } = this.props;
    return <Item {...item} itemOnPress={itemOnPress} itemOnLongPress={this._itemOnLongPress} />
  };
  _getItemLayout = (data, index) => {
    const { itemHeight = 140 } = this.props;
    return { length: itemHeight, offset: itemHeight * index, index };
  };
  render() {
    const { list, isLong, showFooter, emptyText, itemHeight = 140 } = this.props;
    const { loading } = this.state;
    return (
      <FlatList
         data={list}
         keyExtractor={this._keyExtractor}
         renderItem={this._renderItem}
         onEndReached={isLong && this._onFetch}
         onEndReachedThreshold={1.6}
         onRefresh={this._onRefresh}
         refreshing={loading}
         getItemLayout={this._getItemLayout}
         initialNumToRender={Math.ceil(height / itemHeight)}
         ListEmptyComponent={() => <ListEmpty text={emptyText} />}
         ListFooterComponent={showFooter && list.length && FooterComponent}
         {...this.props}
       />
    );
  }
}

export default LongListComponent;
