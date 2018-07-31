import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { brand_primary } from '../../../../theme';
import { Header } from '../../../../navigation';

const ContainStyled = styled.View`
  padding-top: 20px;
  background: ${brand_primary};
`;
function DetailHeaderComponent({ navigation, title }) {
  return (
    <ContainStyled>
      <Header
        navigation={navigation}
        customTitle={title}
        isNoBack
      />
    </ContainStyled>
  );
}
DetailHeaderComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.object,
    }),
  }).isRequired,
  title: PropTypes.string.isRequired,
};
export default DetailHeaderComponent;
