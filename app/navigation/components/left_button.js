import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { brand_primary } from '../../../theme';
import styled from "styled-components";

const BackIcon = () => <Entypo name="chevron-left" size={20} color={brand_primary} />;

const Padding = styled.Text`
  padding: 10px;
`
class LeftButton extends PureComponent {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <TouchableOpacity onPress={goBack}>
        <Padding>
          <BackIcon />
        </Padding>
      </TouchableOpacity>
    );
  }
}

export default LeftButton;
