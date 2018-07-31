import React from 'react';
import PropTypes from 'prop-types';
import { BackHandler, Platform } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import Toast from 'react-native-root-toast';
import AppNavigator from './stack_navigation';
import { addListener } from '../store';

class NavigationWithState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  }

  constructor() {
    super();
    this.canExit = false;
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('handwareBackPress', this.onBackAndroid);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('handwareBackPress', this.onBackAndroid);
    }
  }

  onBackAndroid = () => {
    if (this.canExit) BackHandler.exitApp();
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      Toast.show('再按一次退出应用', {
        position: -70,
        duration: 1500,
      });
      this.canExit = true;
      setTimeout(() => this.canExit = false, 2000);
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav,
      addListener,
    });
    return (
      <AppNavigator
        navigation={navigation}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(NavigationWithState);
