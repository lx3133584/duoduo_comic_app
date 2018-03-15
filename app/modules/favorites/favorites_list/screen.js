import React, { PureComponent } from 'react';
import { FavoritesList } from '.';
import styled from "styled-components";
import { brand_primary } from '../../../theme';
import { StatusBar, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const ContainStyled = styled.View`
  background: #fff;
  min-height: ${height};
`

class FavoritesListScreen extends PureComponent {
  static navigationOptions = {
    title: '收藏',
  };
  render() {
    return (
    <ContainStyled>
      <StatusBar barStyle="light-content" backgroundColor={brand_primary} />
      <FavoritesList />
    </ContainStyled>)
  };
}

export default FavoritesListScreen;
