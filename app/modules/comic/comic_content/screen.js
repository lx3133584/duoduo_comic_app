import React, { PureComponent } from 'react';
import styled from "styled-components";
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { wrapWithLoading } from '../../../utils';
import { LoadingPage } from '..';
import { ContentList, ContentStatusBar, ContentDrawerManager } from '.';

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
  state = {
    show_drawer: false,
  };
  toggleDrawer = () => {
    this.setState(({ show_drawer }) => {
      return { show_drawer: !show_drawer }
    });
  };
  render() {
    const { loading, hideLoading } = this.props;
    const { show_drawer } = this.state;
    return ([
      <LoadingPage show={loading} key="loading" />,
      <ContentDrawerManager key="drawer" show={show_drawer} />,
      <ContentStatusBar key="status_bar"/>,
      <ContainStyled key="content">
        <StatusBar hidden />
        <ContentList toggleDrawer={this.toggleDrawer} hideLoading={hideLoading} />
      </ContainStyled>
    ])};
}

export default ContentListScreen;
