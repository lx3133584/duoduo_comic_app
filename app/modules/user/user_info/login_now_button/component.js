import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { brand_primary } from '~/theme';

const buttonStyle = {
  backgroundColor: '#fff',
  width: 80,
  height: 30,
  borderColor: brand_primary,
  borderWidth: 1,
};
const textStyle = {
  fontSize: 12,
  color: brand_primary,
};
const largeStyle = {
  width: 120,
  height: 40,
};
const containerStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

function LoginNowButtonComponent({ navigation, large }) {
  return (
    <Button
      title="立即登录"
      containerStyle={containerStyle}
      titleStyle={[textStyle, large && { fontSize: 14 }]}
      buttonStyle={[buttonStyle, large && largeStyle]}
      onPress={() => navigation.navigate('Login')}
    />
  );
}
LoginNowButtonComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  large: PropTypes.bool,
};
LoginNowButtonComponent.defaultProps = {
  large: false,
};
export default LoginNowButtonComponent;
