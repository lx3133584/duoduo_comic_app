import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LeftButton } from '~/navigation';

const ContainStyled = styled.View`
  position: absolute;
  top: 28;
  left: 0;
`;
function DetailBackButtonComponent({ navigation }) {
  return (
    <ContainStyled>
      <LeftButton
        navigation={navigation}
      />
    </ContainStyled>
  );
}
DetailBackButtonComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.object,
    }),
  }).isRequired,
};

export default DetailBackButtonComponent;
