import React from 'react';
import styled from 'styled-components';
import { LeftButton } from '../../../../navigation';

const ContainStyled = styled.View`
  position: absolute;
  top: 28;
  left: 0;
`;
export default function DetailBackButtonComponent({ navigation }) {
  return (
    <ContainStyled>
      <LeftButton
        navigation={navigation}
      />
    </ContainStyled>
  );
}
