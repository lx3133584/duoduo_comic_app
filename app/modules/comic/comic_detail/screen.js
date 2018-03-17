import React, { PureComponent } from 'react';
import { ComicDetailTop, ComicDetailBtns, ComicDetailTabs, LoadingPage } from '.';
import { ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { wrapWithLoading } from '../../../utils';

class ComicDetailScreen extends PureComponent {
  static propTypes = {
    hideLoading: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };
  static navigationOptions = {
    title: '漫画详情',
  };
  render() {
    const { loading, hideLoading } = this.props;
    return ([
      <LoadingPage show={loading} key="loading" />,
      <ScrollView key="main">
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        <ComicDetailTop hideLoading={hideLoading} />
        <ComicDetailBtns />
        <ComicDetailTabs />
      </ScrollView>
  ])};
}

export default wrapWithLoading(ComicDetailScreen);
