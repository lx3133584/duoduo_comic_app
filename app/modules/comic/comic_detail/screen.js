import React, { PureComponent } from 'react';
import { ComicDetailTop, ComicDetailBtns, ComicDetailTabs } from '.';
import { View } from 'react-native';

class ComicDetailScreen extends PureComponent {
  static navigationOptions = {
    title: '漫画详情',
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <ComicDetailTop />
        <ComicDetailBtns />
        <ComicDetailTabs />
      </View>
  )};
}

export default ComicDetailScreen;
