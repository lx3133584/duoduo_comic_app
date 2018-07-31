import React from 'react';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import { brand_primary, red } from '../../../../theme';

const ContainStyled = styled.View`
  margin: 5px 40px;
`;

const textStyle = {
  fontSize: 14,
};
const containerStyle = {
  borderBottomColor: brand_primary,
};

export default function LoginInputComponent({
  password, errorMessage, iconName, placeholder, value, onChange, onSubmit,
}) {
  return (
    <ContainStyled>
      <Input
        value={value}
        placeholder={placeholder || '请输入'}
        maxLength={32}
        shake
        inputStyle={textStyle}
        inputContainerStyle={containerStyle}
        secureTextEntry={password}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        errorStyle={{ color: red }}
        errorMessage={errorMessage || null}
        leftIcon={(
          <Icon
            name={iconName || 'user'}
            size={24}
            color={brand_primary}
          />
)}
      />
    </ContainStyled>
  );
}
