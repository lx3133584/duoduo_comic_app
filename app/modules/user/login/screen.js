import React, { PureComponent } from 'react';
import { Brand, LoginLocal } from '.';
import styled from "styled-components";
import { StatusBar, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { brand_primary } from '../../../theme';
import { Header } from '../../../navigation';
const { height } = Dimensions.get('window');

const ContainStyled = styled.View`
  min-height: ${height};
  background-color: #fff;
`

class LoginScreen extends PureComponent {
  static navigationOptions = {
    title: '登录',
    header: (props) => <Header {...props} />,
  };
  render() {
    return (
      <ContainStyled>
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          extraScrollHeight={60}
          extraHeight={60}>
            <StatusBar barStyle="light-content" backgroundColor={brand_primary} />
            <Brand />
            <LoginLocal />
        </KeyboardAwareScrollView>
      </ContainStyled>
    );
  }
}

export default LoginScreen;
