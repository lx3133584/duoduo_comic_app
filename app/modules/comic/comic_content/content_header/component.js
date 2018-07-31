import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Header } from '../../../../navigation';

const ContainStyled = styled.View`
  padding-top: 10px;
`;

function ContentHeaderComponent({ navigation, title }) {
  return (
    <ContainStyled>
      <Header
        navigation={navigation}
        customTitle={title}
        customBackgroundColor="transparent"
      />
    </ContainStyled>
  );
}
ContentHeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.object.isRequired,
    }),
  }).isRequired,
};
export default ContentHeaderComponent;
