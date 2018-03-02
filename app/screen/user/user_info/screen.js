import { PureComponent } from 'react';
import styled from "styled-components";

const StyledView = styled.View`
  background-color: papayawhip;
`;

class UserInfoScreen extends PureComponent {
  render() {
    return (
      <StyledView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>UserInfoScreen</Text>
      </StyledView>
    );
  }
}

export default UserInfoScreen;
