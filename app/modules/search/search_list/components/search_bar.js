import React, { PureComponent } from 'react';
import styled from "styled-components";
import { Text, View } from 'react-native';
import { SearchBar } from 'antd-mobile';

class SearchBarComponent extends PureComponent {
  static navigationOptions = {
    title: '搜索',
    header: null,
  };
  state = {
    value: '',
  };
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };
  componentDidMount() {
  };
  onChange(value) {
    this.setState({ value });
  };
  onSubmit(value) {
    console.log(value, 'onSubmit')
  };
  render() {
    return (
      <SearchBar
        value={this.state.value}
        placeholder="搜索漫画信息（名称、作者、描述）"
        autoFocus
        onSubmit={this.onSubmit}
        onChange={this.onChange}
      />
    );
  }
}

export default SearchBarComponent;
