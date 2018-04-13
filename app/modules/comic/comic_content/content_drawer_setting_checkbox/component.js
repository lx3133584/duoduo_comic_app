import React, { PureComponent } from 'react';
import styled from "styled-components";
import { Button } from 'react-native-elements';
import { brand_primary } from '../../../../theme';

const ContainStyled = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`
const buttonStyle = {
  backgroundColor: 'transparent',
  borderWidth: 1,
  borderRadius: 3,
  borderColor: '#fff',
  height: 45,
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
      text={text}
      buttonStyle={[buttonStyle, active && {borderColor: brand_primary}]}
      textStyle={[textStyle, active && {color: brand_primary}]}
      onPress={() => changeValue(value)}
    />
  )
}
export default function ContentDrawerSettingCheckboxComponent({ options, value, changeValue }) {
  return (
    <ContainStyled>
      {options.map(item => {
        return <ButtonComponent
          {...item}
          active={value === item.value}
          changeValue={changeValue}
          key={item.value} />
      })}
    </ContainStyled>
  );
}
