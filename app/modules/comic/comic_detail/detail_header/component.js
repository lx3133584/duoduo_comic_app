import React from 'react';
import styled from "styled-components";
import { brand_primary } from '../../../../theme';
import { Header } from '../../../../navigation';

const ContainStyled = styled.View`
  padding-top: 20px;
  background: ${brand_primary};
`
export default function DetailHeaderComponent({ navigation, title }) {
  return (
    <ContainStyled>
      <Header
        navigation={navigation}
        customTitle={title}
        isNoBack
      />
    </ContainStyled>
  )
}
