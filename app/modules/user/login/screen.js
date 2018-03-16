import React, { PureComponent } from 'react';
import { Brand, LoginLocal } from '.';
import styled from "styled-components";
import { StatusBar, Dimensions } from 'react-native';
import { brand_primary } from '../../../theme';
import { Header } from '../../../navigation';
const { height } = Dimensions.get('window');

const ContainStyled = styled.View`
  padding: 120px 0 200px;
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
        <StatusBar barStyle="light-content" backgroundColor={brand_primary} />
        <Brand />
        <LoginLocal />
      </ContainStyled>
    );
  }
}

export default LoginScreen;
