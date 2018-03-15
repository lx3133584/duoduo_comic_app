import React, { PureComponent } from 'react';
import { ComicDetailTop, ComicDetailBtns, ComicDetailTabs } from '.';
import { ScrollView } from 'react-native';
import { StatusBar } from 'react-native';

class ComicDetailScreen extends PureComponent {
  static navigationOptions = {
    title: '漫画详情',
  };
  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        <ComicDetailTop />
        <ComicDetailBtns />
        <ComicDetailTabs />
      </ScrollView>
  )};
}

export default ComicDetailScreen;
