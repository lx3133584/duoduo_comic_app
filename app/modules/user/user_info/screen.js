import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import { UserTop, UserOperateList } from '.';
import { brand_primary } from '../../../theme';
import { wrapWithUpdate } from '../../../utils';

@wrapWithUpdate
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
  }

  render() {
    const { checkUpdate } = this.props;
    return (
      <ScrollView>
        <StatusBar barStyle="light-content" backgroundColor={brand_primary} />
        <UserTop />
        <UserOperateList checkUpdate={checkUpdate} />
      </ScrollView>
    );
  }
}

export default UserInfoScreen;
