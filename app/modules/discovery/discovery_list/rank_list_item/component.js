import React from 'react';
import styled from "styled-components";
import { TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import baseURL from '../../../../api/base_url';
import { green, red, purple, yellow } from '../../../../theme';
const { width } = Dimensions.get('window');
const containWidth = width / 2 - 25;

const ContainStyled = styled.View`
  margin: 10px 12px;
  width: ${containWidth};
  height: 50px;
  border-radius: 10px;
  background: ${green};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const TitleStyled = styled.Text`
  margin-left: 5px;
  color: #fff;
  font-size: 16px;
`
const ImageBoxStyled = styled.View`
  border-radius: 999px;
  width: 80;
  height: 80;
  overflow: hidden;
`
const colors = [ red, green, purple, yellow ]
export default function RankListItem({ id, name, Icon, navigation }) {
  return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ComicDetail', { id })}
        activeOpacity={0.6}>
          <ContainStyled style={{ backgroundColor: colors[id] }}>
            <Icon />
            <TitleStyled>{name}</TitleStyled>
          </ContainStyled>
      </TouchableOpacity>
  )
}
