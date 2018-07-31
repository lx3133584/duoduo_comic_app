import React, { PureComponent } from 'react';
import styled from 'styled-components';

const TextStyled = styled.Text`
  color: #fff;
  font-size: 12px;
`;
export default function TitleComponent({ title }) {
  return (
    <TextStyled>
      {title}
    </TextStyled>
  );
}
