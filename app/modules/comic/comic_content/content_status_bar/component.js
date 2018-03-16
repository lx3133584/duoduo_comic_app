import React, { PureComponent } from 'react';
import styled from "styled-components";
import { NetInfo } from 'react-native';
import { Battery, NetStatus } from '..';

const ContainStyled = styled.View`
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2px 2px 2px 10px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  border-bottom-right-radius: 4px;
  z-index: 1;
`
const ItemStyled = styled.View`
  justify-content: center;
  margin-right: 8px;
`
const TextStyled = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-right: 8px;
`

class ContentStatusBarComponent extends PureComponent {
  constructor() {
    super();
    this.getTime = this.getTime.bind(this);
  };
  state = {
    time: '00:00',
  };
  getTime() {
    const date = new Date;
    const hour = date.getHours();
    const minutes = date.getMinutes();
    this.setState({ time: `${this.fillZero(hour)}:${this.fillZero(minutes)}`});
  };
  fillZero(num) {
    if (num < 10) return `0${num}`;
    return num;
  };
  componentDidMount() {
    this.getTime();
    this.timer = setInterval(this.getTime, 30000);
  };
  componentWillUnmount() {
    clearInterval(this.timer);
  };
  render() {
    const { time } = this.state;
    return (
      <ContainStyled>
        <ItemStyled>
          <NetStatus />
        </ItemStyled>
        <TextStyled>{time}</TextStyled>
        <ItemStyled>
          <Battery />
        </ItemStyled>
      </ContainStyled>
    );
  }
}

export default ContentStatusBarComponent;
