import React, { PureComponent } from 'react';
import styled from "styled-components";
import { Button } from 'react-native-elements';
import { brand_primary } from '../../../../theme';

const ContainStyled = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 0 15px;
  align-items: center;
`
const ButtonsContainStyled = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`
const TextStyled = styled.Text`
  font-size: 16px;
  color: #fff;
`
const buttonStyle = {
  backgroundColor: 'transparent',
  borderWidth: 1,
  borderColor: '#fff',
  borderRadius: 5,
  marginTop: 5,
  marginBottom: 5,
  elevation: 0,
}
const textStyle = {
  fontWeight: 'normal',
  color: '#fff',
  fontSize: 18,
}
function ButtonComponent({ icon, text, value, changeValue, active }) {
  return (
    <Button
      icon={icon || null}
      buttonStyle={[buttonStyle, active && {borderColor: brand_primary}]}
      title={text}
      titleStyle={[textStyle, active && {color: brand_primary}]}
      onPress={() => changeValue(value)}
    />
  )
}
export default function ContentDrawerSettingCheckboxComponent({ title, options, value, changeValue }) {
  return (
    <ContainStyled>
      <TextStyled>{title}</TextStyled>
      <ButtonsContainStyled>
        {options.map(item =>
          <ButtonComponent
            {...item}
            active={value === item.value}
            changeValue={changeValue}
            key={item.value} />
        )}
      </ButtonsContainStyled>
    </ContainStyled>
  );
}
