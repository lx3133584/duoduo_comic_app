import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { SearchBar, SearchList } from '.';

class SearchListScreen extends PureComponent {
  static navigationOptions = {
    title: '搜索',
    header: null,
  };
  render() {
    return (
    <View>
      <SearchBar />
      <SearchList />
    </View>)
  };
}

export default SearchListScreen;
