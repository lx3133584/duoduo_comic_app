import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { UserTop, UserOperateList } from '.';
import { View } from 'react-native';
import { brand_primary } from '../../../theme';
import { StatusBar } from 'react-native';
import { wrapWithUpdate } from '../../../utils';

class UserInfoScreen extends PureComponent {
  static navigationOptions = {
    title: '用户',
  };
  static propTypes = {
    checkUpdate: PropTypes.func.isRequired,
  };
  componentWillMount() {
    const { checkUpdate } = this.props;
    checkUpdate();
  };
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor={brand_primary} />
        <UserTop />
        <UserOperateList />
      </View>
    );
  }
}

export default wrapWithUpdate(UserInfoScreen);
