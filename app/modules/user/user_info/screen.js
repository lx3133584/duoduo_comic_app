import React, { PureComponent } from 'react';
import { UserTop, UserOperateList } from '.';
import styled from "styled-components";

const ContainStyled = styled.View`
  padding-bottom: 50px;
`

class UserInfoScreen extends PureComponent {
  static navigationOptions = {
    title: '用户',
  };
  render() {
    return (
      <ContainStyled>
        <UserTop />
        <UserOperateList />
      </ContainStyled>
    );
  }
}

export default UserInfoScreen;
