import React from 'react';
import styled from "styled-components";
import { brand_primary } from '../../../../theme';
import { Image } from 'react-native';

const ContainStyled = styled.View`
  padding: 30px 0;
  justify-content: center;
  align-items: center;
`
const ImageContainStyled = styled.View`
  background-color: ${brand_primary};
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  width: 72;
  height: 72;
`
const TextStyled = styled.Text`
  margin: 10px 0;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  color: ${brand_primary};
`
const imageStyle = {
  width: 60,
  height: 60,
}

export default function BrandComponent({ navigation }) {
  return (
    <ContainStyled>
      <ImageContainStyled>
        <Image
          source={require('./logo.png')}
          style={imageStyle}
        />
      </ImageContainStyled>
      <TextStyled>多多漫画</TextStyled>
    </ContainStyled>
  );
}
