import React, { PureComponent } from 'react';
import { ContentList } from '.';
import { ScrollView } from 'react-native';

class ContentListScreen extends PureComponent {
  static navigationOptions = {
    title: '漫画内容',
  };
  render() {
    return (
      <ScrollView>
        <ContentList />
      </ScrollView>
  )};
}

export default ContentListScreen;
