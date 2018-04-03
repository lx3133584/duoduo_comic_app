import React, { PureComponent } from 'react';
import { ContentList, ContentStatusBar } from '.';
import styled from "styled-components";
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { wrapWithLoading } from '../../../utils';
import { LoadingPage } from '..';

const ContainStyled = styled.View`
  background-color: #282828;
`
@wrapWithLoading
class ContentListScreen extends PureComponent {
  static propTypes = {
    hideLoading: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };
  static navigationOptions = {
    title: '漫画内容',
  };
  render() {
    const { loading, hideLoading } = this.props;
    return ([
      <LoadingPage show={loading} key="loading" />,
      <ContentStatusBar key="status_bar"/>,
      <ContainStyled key="content">
        <StatusBar hidden />
        <ContentList hideLoading={hideLoading} />
      </ContainStyled>
    ])};
}

export default ContentListScreen;
