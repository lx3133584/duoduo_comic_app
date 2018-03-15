import React, { PureComponent } from 'react';
import { FavoritesListTabs } from '.';
import styled from "styled-components";
import { brand_primary } from '../../../theme';
import { StatusBar, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const ContainStyled = styled.View`
  background: #fff;
  min-height: ${height};
  padding-bottom: 72px;
`

class FavoritesListScreen extends PureComponent {
  static navigationOptions = {
    title: '书架',
  };
  render() {
    return (
    <ContainStyled>
      <StatusBar barStyle="light-content" backgroundColor={brand_primary} />
      <FavoritesListTabs />
    </ContainStyled>)
  };
}

export default FavoritesListScreen;
