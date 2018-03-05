import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { brand_primary } from '../../../theme';

const BackIcon = () => <Entypo name="chevron-left" size={20} color={brand_primary} />;

class LeftButton extends PureComponent {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <TouchableOpacity onPress={goBack}>
          <BackIcon />
      </TouchableOpacity>
    );
  }
}

export default LeftButton;
