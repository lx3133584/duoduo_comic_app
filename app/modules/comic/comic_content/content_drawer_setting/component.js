import React, { PureComponent } from 'react';
import styled from "styled-components";
import { Dimensions } from 'react-native';
import { ContentDrawerBrightness, ContentDrawerOrientation } from '..';
const { width } = Dimensions.get('window');


const ContainStyled = styled.View`
  justify-content: space-around;
  align-items: center;
`

class ContentDrawerSettingComponent extends PureComponent {
  static height = 120;
  render() {
    return (
      <ContainStyled style={{ height: ContentDrawerSettingComponent.height }}>
        <ContentDrawerBrightness />
        <ContentDrawerOrientation />
      </ContainStyled>
    );
  }
}

export default ContentDrawerSettingComponent;
