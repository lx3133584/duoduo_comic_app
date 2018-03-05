import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

class HeaderTitle extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Text>
        {children}
      </Text>
    );
  }
}

export default HeaderTitle;
