import React from 'react';
import styled from "styled-components";
import { Progress } from '..';
import { brand_primary } from '../../../../theme';
import { Dimensions } from 'react-native';
const { width: clientWidth, height } = Dimensions.get('window');

const ContainStyled = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  height: ${height};
  background-color: #fff;
  justify-content: center;
  align-items: center;
`
const OffetStyled = styled.View`
  padding-bottom: 50px;
  justify-content: center;
  align-items: center;
`
const TextStyled = styled.Text`
  font-size: 14px;
  color: ${brand_primary};
  margin-top: 10px;
`

export default function ProgressComponent({ show, width = clientWidth }) {
  if (!show) return null;
  return (
    <ContainStyled style={{ width }}>
      <OffetStyled>
        <Progress />
        <TextStyled>页面正在加载中...</TextStyled>
      </OffetStyled>
    </ContainStyled>
  )
}
