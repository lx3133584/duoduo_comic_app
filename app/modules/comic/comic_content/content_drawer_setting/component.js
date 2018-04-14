import React, { PureComponent } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { ContentDrawerBrightness, ContentDrawerOrientation } from '..';
const { width } = Dimensions.get('window');


const ContainStyled = styled.View`
  justify-content: space-around;
  align-items: center;
`

class ContentDrawerSettingComponent extends PureComponent {
  static propTypes = {
    toggleDrawer: PropTypes.func.isRequired,
  };
  static height = 120;
  render() {
    const { toggleDrawer } = this.props;
    return (
      <ContainStyled style={{ height: ContentDrawerSettingComponent.height }}>
        <ContentDrawerBrightness />
        <ContentDrawerOrientation toggleDrawer={toggleDrawer} />
      </ContainStyled>
    );
  }
}

export default ContentDrawerSettingComponent;
