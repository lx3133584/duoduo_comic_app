import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Image } from '../../..';
import baseURL from '../../../../api/base_url';

const ContainStyled = styled.View`
  margin: 5px 12px;
`;
const TitleStyled = styled.Text`
  margin-top: 10px;
  color: #333;
  font-size: 14px;
  text-align: center;
`;
const ImageBoxStyled = styled.View`
  border-radius: 999px;
  width: 80;
  height: 80;
  overflow: hidden;
`;
const imageStyle = {
  width: 80,
  height: 80,
};
function ClassListItem({
  id, name, cover, itemOnPress,
}) {
  return (
    <ContainStyled>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => itemOnPress('ClasskItemList', { id, name })}
      >
        <ImageBoxStyled>
          <Image
            source={{ uri: baseURL + cover }}
            imageStyle={imageStyle}
          />
        </ImageBoxStyled>
      </TouchableOpacity>
      <TitleStyled>
        {name}
      </TitleStyled>
    </ContainStyled>
  );
}
ClassListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  itemOnPress: PropTypes.func.isRequired,
  cover: PropTypes.string.isRequired,
};
export default ClassListItem;
