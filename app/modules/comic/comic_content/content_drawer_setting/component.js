import React, { PureComponent } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { ContentDrawerBrightness, ContentDrawerOrientation, ContentDrawerReadingMode } from '..';
const { width } = Dimensions.get('window');


const ContainStyled = styled.View`
  justify-content: space-around;
  align-items: center;
`

class ContentDrawerSettingComponent extends PureComponent {
  static propTypes = {
    toggleDrawer: PropTypes.func.isRequired,
    orientation: PropTypes.string.isRequired,
  };
  static height = 200;
  render() {
    const { toggleDrawer, orientation } = this.props;
    return (
      <ContainStyled style={{ height: ContentDrawerSettingComponent.height }}>
        <ContentDrawerBrightness />
        <ContentDrawerOrientation toggleDrawer={toggleDrawer} />
        {orientation === 'horizon' || <ContentDrawerReadingMode />}
      </ContainStyled>
    );
  }
}

export default ContentDrawerSettingComponent;
