import React, { PureComponent } from 'react';
import { Avatar, LoginNowButton } from '..';
import { brand_primary } from '../../../../theme';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import styled from "styled-components";

const ContainStyled = styled.View`
  height: 260px;
  background-color: #fff;
`
const PrimaryBackground = styled.View`
  height: 100px;
  background-color: ${brand_primary};
`
const TransparentContainStyled = styled.View`
  height: 200px;
  background-color: transparent;
`
const AvatarContainStyled = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: row;
`
const AvatarStyled = styled.View`
  border: 5px solid #fff;
  border-radius: 100px;
  background-color: #fff;
  transform: translateY(-35px);
`
const ContentContainStyled = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const NameContainStyled = styled.View`
  transform: translateY(-35px);
`
const NameStyled = styled.Text`
  color: #000;
  font-size: 16px;
`

class UserTopComponent extends PureComponent {
  static propTypes = {
    info: ImmutablePropTypes.map.isRequired,
    getUser: PropTypes.func.isRequired,
  };
  state = {
    value: '',
    loading: false,
  };
  constructor(props) {
    super(props);
  };
  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  };
  render() {
    const { info, navigation } = this.props;
    return (
      <ContainStyled>
        <TransparentContainStyled>
          <PrimaryBackground />
          <AvatarContainStyled>
            <AvatarStyled>
              <Avatar
                src={info.get('avatar')}
                onPress={info.size ? () => navigation.navigate('UserInfoEdit') : null}
              />
            </AvatarStyled>
          </AvatarContainStyled>
        </TransparentContainStyled>
        <ContentContainStyled>
          <NameContainStyled>
          {info.size ? <NameStyled>{info.get('name') || info.get('username')}</NameStyled>
           : <LoginNowButton />}
           </NameContainStyled>
        </ContentContainStyled>
      </ContainStyled>
    );
  }
}

export default UserTopComponent;
