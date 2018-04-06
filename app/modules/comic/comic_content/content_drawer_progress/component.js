import React, { PureComponent } from 'react';
import styled from "styled-components";
import { Slider } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { brand_primary } from '../../../../theme';
import Feather from 'react-native-vector-icons/Feather';
const { width } = Dimensions.get('window');

const ICON_SIZE = 20;
const ICON_COLOR = "#fff";

const NextIcon = () => <Feather name="chevron-right" size={ICON_SIZE} color={ICON_COLOR} />;
const PrevIcon = () => <Feather name="chevron-left" size={ICON_SIZE} color={ICON_COLOR} />;

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

class ContentDrawerProgressComponent extends PureComponent {
  static height = 50;
  state = { value: 0.2 }
  render() {
    const { index, total } = this.props;
    return (
      <ContainStyled style={{ height: ContentDrawerProgressComponent.height }}>
        <PrevIcon />
        <Slider
          style={silderStyle}
          value={index}
          minimumValue={1}
          maximumValue={total}
          thumbTintColor={brand_primary}
          thumbTouchSize={thumbTouchSize}
          minimumTrackTintColor={brand_primary}
          maximumTrackTintColor="#ddd"
          onValueChange={(value) => this.setState({value})} />
        <NextIcon />
      </ContainStyled>
    );
  }
}

export default ContentDrawerProgressComponent;
