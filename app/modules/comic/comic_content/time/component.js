import React, { PureComponent } from 'react';
import styled from "styled-components";

const TextStyled = styled.Text`
  color: #fff;
  font-size: 12px;
`

class TimeComponent extends PureComponent {
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
      <TextStyled>{time}</TextStyled>
    );
  }
}

export default TimeComponent;
