import React, { PureComponent } from 'react';
import { SearchBar, SearchList } from '.';
import { View } from 'react-native';

class SearchListScreen extends PureComponent {
  static navigationOptions = {
    title: '搜索',
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
