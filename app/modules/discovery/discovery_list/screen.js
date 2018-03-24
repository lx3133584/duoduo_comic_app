import React, { PureComponent } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import styled from "styled-components";
import { ClassList, RankList } from '.';
import { brand_primary } from '../../../theme';
import { Header } from '../../../navigation';
const { height, width } = Dimensions.get('window');

const ContainStyled = styled.ScrollView`
  background: #fff;
  min-height: ${height};
  padding-top: 50px;
`
const HeaderContainStyled = styled.View`
  position: absolute;
  top: 0;
  width: ${width};
  z-index: 1;
`

class DiscoveryListScreen extends PureComponent {
  static navigationOptions = {
    title: '发现',
  };
  render() {
    return [
      <HeaderContainStyled key="header">
        <Header isNoBack customTitle="漫画分类" />
      </HeaderContainStyled>,
      <ContainStyled key="main">
        <StatusBar barStyle="light-content" backgroundColor={brand_primary} />
        <RankList />
        <ClassList />
      </ContainStyled>
    ]
  };
}

export default DiscoveryListScreen;
