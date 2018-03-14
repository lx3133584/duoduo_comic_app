import React, { PureComponent } from 'react';
import { ComicDetailTop, ComicDetailBtns, ComicDetailTabs } from '.';
import { ScrollView } from 'react-native';

class ComicDetailScreen extends PureComponent {
  static navigationOptions = {
    title: '漫画详情',
    headerTransparent: true,
  };
  render() {
    return (
      <ScrollView>
        <ComicDetailTop />
        <ComicDetailBtns />
        <ComicDetailTabs />
      </ScrollView>
  )};
}

export default ComicDetailScreen;
