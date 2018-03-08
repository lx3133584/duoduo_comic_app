import React, { PureComponent } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { LoginInput, LoginButton } from '..';

const ContainStyled = styled.View`
  margin: 10px 0;
`
const TextStyled = styled.Text`
  text-align: center;
`

class LoginLocalComponent extends PureComponent {
  static propTypes = {
  };
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <ContainStyled>
        <LoginInput />
        <LoginInput />
        <LoginButton />
      </ContainStyled>
    );
  }
}

export default LoginLocalComponent;
