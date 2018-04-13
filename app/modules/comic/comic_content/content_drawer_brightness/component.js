import React, { PureComponent } from 'react';
import styled from "styled-components";
import { Slider } from 'react-native-elements';
import { Dimensions, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { brand_primary } from '../../../../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeviceBrightness from 'react-native-device-brightness';
const { width } = Dimensions.get('window');

const ICON_SIZE = 20;
const ICON_COLOR = "#fff";

const IncreaseBrightnessIcon = () => <Ionicons name="ios-sunny-outline" size={ICON_SIZE} color={ICON_COLOR} />;
const DecreaseBrightnessIcon = () => <Ionicons name="ios-sunny" size={ICON_SIZE} color={ICON_COLOR} />;

const ContainStyled = styled.View`
  width: ${width};
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

class ContentDrawerBrightnessComponent extends PureComponent {
  static propTypes = {
    switchBrightness: PropTypes.func.isRequired,
    brightness: PropTypes.number.isRequired,
  };
  componentDidMount() {
    this.init();
  };
  init = () => {
    const { brightness } = this.props;
    DeviceBrightness.setBrightnessLevel(brightness);
  };
  switchBrightness = value => {
    const { switchBrightness } = this.props;
    DeviceBrightness.setBrightnessLevel(value);
    switchBrightness(value);
  };
  increaseBrightness = value => {
    const { brightness } = this.props;
    let newValue = brightness + value;
    newValue > 1 && (newValue = 1);
    newValue < 0 && (newValue = 0);
    return () => this.switchBrightness(newValue);
  };
  render() {
    const { brightness } = this.props;
    return (
      <ContainStyled>
        <TouchableOpacity onPress={this.increaseBrightness(-0.1)}>
          <DecreaseBrightnessIcon />
        </TouchableOpacity>
        <Slider
          style={silderStyle}
          value={brightness}
          minimumValue={0}
          maximumValue={1}
          thumbTintColor={brand_primary}
          thumbTouchSize={thumbTouchSize}
          minimumTrackTintColor={brand_primary}
          maximumTrackTintColor="#ddd"
          step={0.01}
          onValueChange={this.switchBrightness} />
        <TouchableOpacity onPress={this.increaseBrightness(0.1)}>
          <IncreaseBrightnessIcon />
        </TouchableOpacity>
      </ContainStyled>
    );
  }
}

export default ContentDrawerBrightnessComponent;
