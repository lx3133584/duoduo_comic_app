import React from 'react';
import styled from 'styled-components';
import { Badge } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { Image } from '../../..';

const { width } = Dimensions.get('window');

const contentWidth = width / 3 - 25;
const ContainStyled = styled.View`
  margin: 5px 12px;
  width: ${contentWidth};
`;
const TopStyled = styled.View`
  width: 80px;
`;
const BottomStyled = styled.View`
  margin-top: 8px;
`;
const TitleStyled = styled.Text`
  color: #000;
  font-size: 12px;
`;
const DescStyled = styled.Text`
  color: #999;
  font-size: 10px;
`;
const imageStyle = {
  width: contentWidth,
  height: contentWidth * 3 / 2,
};
export default function FavoritesListItem({
  title, cover, itemOnPress, itemOnLongPress, id, cur_chapter,
}) {
  return (
    <ContainStyled>
      <TouchableOpacity
        activeOpacity={0.6}
        onLongPress={() => itemOnLongPress(id)}
        onPress={() => itemOnPress('ComicDetail', { id, index: 1 })}
      >
        <Image
          source={{ uri: cover }}
          imageStyle={imageStyle}
        />
      </TouchableOpacity>
      <BottomStyled>
        <TitleStyled>
          {title}
        </TitleStyled>
        <DescStyled>
          {cur_chapter || '未看'}
        </DescStyled>
      </BottomStyled>
    </ContainStyled>
  );
}
