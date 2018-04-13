import React, { PureComponent } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { brand_primary } from '../../../../theme';
import Orientation from 'react-native-orientation';
import { ContentDrawerSettingCheckbox } from '..';

const ContainStyled = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
const options = [
  {
    text: '竖 屏',
    value: 'vertical',
  },
  {
    text: '横 屏',
    value: 'horizon',
  },
]

class ContentDrawerOrientationComponent extends PureComponent {
  static propTypes = {
    switchOrientation: PropTypes.func.isRequired,
    orientation: PropTypes.string.isRequired,
  };
  componentDidMount() {
    this.init();
  };
  init = () => {
    const { orientation } = this.props;
    this.switchOrientation(orientation);
  };
  switchOrientation = value => {
    const { switchOrientation } = this.props;
    // Orientation.setOrientationLevel(value);
    if (value === 'vertical') Orientation.lockToPortrait();
    if (value === 'horizon') Orientation.lockToLandscape();
    switchOrientation(value);
  };
  render() {
    const { orientation } = this.props;
    return (
      <ContainStyled>
        <ContentDrawerSettingCheckbox
          changeValue={this.switchOrientation}
          value={orientation}
          options={options} />
      </ContainStyled>
    );
  }
}

export default ContentDrawerOrientationComponent;
