import React, { PureComponent } from 'react';
import { ComicList } from '..';

class ComicContentListDrawerScreen extends PureComponent {
  static navigationOptions = {
    title: '目录',
  };
  state = {
    initialized: false, // 是否初始化完成
  };
  componentDidMount() {
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      () => {
        this.setState({ initialized: true });
      }
    );
  };
  componentWillUnmount() {
    this.didFocusSubscription.remove();
  };
  render() {
    const { initialized } = this.state;
    return (
      initialized && <ComicList {...this.props} dark replace />
  )};
}

export default ComicContentListDrawerScreen;
