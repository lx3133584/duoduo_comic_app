import React, { PureComponent } from 'react';
import styled from "styled-components";
import { Dimensions } from 'react-native';
import { ContentDrawerBrightness } from '..';
const { width } = Dimensions.get('window');


const ContainStyled = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
const silderStyle = {
  width: width - 90,
  height: 40,
}
const thumbTouchSize = {
  width: 25,
  height: 25,
}

class ContentDrawerSettingComponent extends PureComponent {
  static height = 50;
  render() {
    return (
      <ContainStyled style={{ height: ContentDrawerSettingComponent.height }}>
        <ContentDrawerBrightness />
      </ContainStyled>
    );
  }
}

export default ContentDrawerSettingComponent;
