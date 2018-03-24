import React, { PureComponent } from 'react';
import { ClassList } from '.';
import styled from "styled-components";
import { brand_primary } from '../../../theme';
import { StatusBar, Dimensions } from 'react-native';
import { Header } from '../../../navigation';
const { height } = Dimensions.get('window');

const ContainStyled = styled.View`
  background: #fff;
  min-height: ${height};
  padding-bottom: 72px;
`

class DiscoveryListScreen extends PureComponent {
  static navigationOptions = {
    title: '发现',
  };
  render() {
    return (
    <ContainStyled>
      <StatusBar barStyle="light-content" backgroundColor={brand_primary} />
      <Header isNoBack customTitle="漫画分类" />
      <ClassList />
    </ContainStyled>)
  };
}

export default DiscoveryListScreen;
