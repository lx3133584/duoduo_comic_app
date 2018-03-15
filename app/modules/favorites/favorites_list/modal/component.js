import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { brand_primary } from '../../../../theme';
import styled from "styled-components";
import { Button } from 'react-native-elements';
import { Dimensions } from 'react-native';
import Modal from "react-native-modal";
const { width } = Dimensions.get('window');

const ContainStyled = styled.View`
  height: 125px;
  width: ${width * 0.6};
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  justify-content: space-around;
`
const ContentContainStyled = styled.Text`
  padding: 0 10px;
  color: #333;
`
const ButtonContainStyled = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
const containStyle = {
  justifyContent: 'center',
  alignItems: 'center',
}
const confirmButtonStyle = {
  backgroundColor: brand_primary,
  width: 60,
  height: 30,
  borderRadius: 100,
}
const confirmTextStyle = {
  fontSize: 12,
  color: '#fff',
  textAlign: 'justify',
}
const cancelButtonStyle = {
  backgroundColor: '#fff',
  width: 60,
  height: 30,
  borderRadius: 100,
  borderWidth: 1,
  borderColor: '#999',
}
const cancelTextStyle = {
  fontSize: 12,
  color: '#999',
  textAlign: 'justify',
}


class ModalComponent extends PureComponent {
  static propTypes = {
    confirm: PropTypes.func,
    cancel: PropTypes.func,
    isVisible: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this._cancel = this._cancel.bind(this);
    this._confirm = this._confirm.bind(this);
  };
  _cancel() {
    const { cancel } = this.props;
    cancel && cancel();
  };
  _confirm() {
    const { confirm } = this.props;
    confirm && confirm();
  };
  render() {
    const { isVisible, children } = this.props;
    return (
      <Modal
        isVisible={isVisible}
        useNativeDriver
        hideModalContentWhileAnimating
        onBackdropPress={this._cancel}
        animationIn="bounceInDown"
        animationOut="bounceOutUp"
        style={containStyle}
      >
        <ContainStyled>
          <ContentContainStyled>{children}</ContentContainStyled>
          <ButtonContainStyled>
            <Button
              text='取  消'
              textStyle={cancelTextStyle}
              buttonStyle={cancelButtonStyle}
              onPress={this._cancel}
            />
            <Button
              text='确  定'
              textStyle={confirmTextStyle}
              buttonStyle={confirmButtonStyle}
              onPress={this._confirm}
            />
          </ButtonContainStyled>
        </ContainStyled>
      </Modal>
    );
  }
}

export default ModalComponent;
