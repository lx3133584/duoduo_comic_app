import React, { PureComponent } from 'react';
import { SearchBar } from 'react-native-elements';
import PropTypes from 'prop-types';

const containerStyle = {
  backgroundColor: '#FFF',
}

const inputStyle = {
  backgroundColor: '#EDEDED',
  color: '#000',
}

class SearchBarComponent extends PureComponent {
  static propTypes = {
    search: PropTypes.func.isRequired,
  };
  state = {
    value: '',
    loading: false,
  };
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };
  onChange(value) {
    this.setState({ value });
  };
  async onSubmit(value) {
    this.setState({ loading: true });
    await this.props.search(value);
    this.setState({ loading: false });
  };
  render() {
    const { value, loading } = this.state;
    return (
      <SearchBar
        value={value}
        placeholder="搜索漫画信息（名称、作者、描述）"
        lightTheme
        showLoading={loading}
        containerStyle={containerStyle}
        inputStyle={inputStyle}
        onSubmitEditing={this.onSubmit}
        onChangeText={this.onChange}
      />
    );
  }
}

export default SearchBarComponent;
