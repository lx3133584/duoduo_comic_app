import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainStyled = styled.View`
  padding: 0 10px;
`;

const BackIcon = () => <Entypo name="chevron-left" size={24} color="#fff" />;

class LeftButton extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }),
  };

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
        <ContainStyled>
          <BackIcon />
        </ContainStyled>
      </TouchableOpacity>
    );
  }
}

export default LeftButton;
