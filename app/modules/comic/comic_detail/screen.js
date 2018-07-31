import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { wrapWithLoading } from '../../../utils';
import { Parallax, LoadingPage } from '.';

@wrapWithLoading
class ComicDetailScreen extends PureComponent {
  static navigationOptions = {
    title: '漫画详情',
  };

  static propTypes = {
    hideLoading: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  render() {
    const { loading, hideLoading } = this.props;
    return ([
      <LoadingPage show={loading} key="loading" />,
      <StatusBar key="status" barStyle="light-content" translucent backgroundColor="transparent" />,
      <Parallax hideLoading={hideLoading} key="main" />,
    ]);
  }
}

export default ComicDetailScreen;
