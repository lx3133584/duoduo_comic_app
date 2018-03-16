import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';

const BackIcon = () => <Entypo name="chevron-left" size={24} color="#fff" />;

class LeftButton extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }),
  };
  render() {
    const { navigation } = this.props;
    return (
      <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
          <BackIcon />
      </TouchableOpacity>
    );
  }
}

export default LeftButton;
