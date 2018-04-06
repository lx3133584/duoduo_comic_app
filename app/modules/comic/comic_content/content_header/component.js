import React from 'react';
import styled from "styled-components";
import { Header } from '../../../../navigation';

const ContainStyled = styled.View`
  padding-top: 10px;
`

export default function ContentHeaderComponent({ navigation, title }) {
  return (
    <ContainStyled>
      <Header
        navigation={navigation}
        customTitle={title}
        customBackgroundColor="transparent"
      />
    </ContainStyled>
  )
}
