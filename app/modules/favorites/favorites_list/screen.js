import React, { PureComponent } from 'react';
import { FavoritesList } from '.';
import styled from "styled-components";

const ContainStyled = styled.View`
  background: #fff;
`

class FavoritesListScreen extends PureComponent {
  static navigationOptions = {
    title: '收藏',
  };
  render() {
    return (
    <ContainStyled>
      <FavoritesList />
    </ContainStyled>)
  };
}

export default FavoritesListScreen;
