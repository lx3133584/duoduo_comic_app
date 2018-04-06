import React, { PureComponent } from 'react';
import { ComicList } from '..';

class ComicContentListDrawerScreen extends PureComponent {
  static navigationOptions = {
    title: '目录',
  };
  render() {
    return (
      <ComicList {...this.props}/>
  )};
}

export default ComicContentListDrawerScreen;
