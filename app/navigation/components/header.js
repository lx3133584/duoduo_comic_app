import React, { PureComponent } from 'react';
import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';
import { brand_primary } from '../../theme';
import LeftButton from './left_button';

const centerTextStyle = {
  color: '#fff',
  fontSize: 16,
};
const outerContainerStyles = {
  padding: 0,
  paddingBottom: 10,
  height: 50,
  borderBottomWidth: 0,
};

class HeaderComponent extends PureComponent {
  options = {
  };

  static propTypes = {
    scene: PropTypes.object,
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }),
    getScreenDetails: PropTypes.func,
    isNoBack: PropTypes.bool,
    customTitle: PropTypes.string,
    customBackgroundColor: PropTypes.string,
    rightComponent: PropTypes.element,
  };

  static defaultProps = {
    scene: null,
    navigation: null,
    getScreenDetails: null,
    isNoBack: false,
    customTitle: '',
    customBackgroundColor: '',
    rightComponent: null,
  }

  constructor(props) {
    super(props);
    this.options = {};
    const { getScreenDetails, scene, navigation } = props;
    if (!navigation) return;
    if (getScreenDetails && scene) {
      const { options } = getScreenDetails(scene);
      this.options = options;
    }
    this.navigation = navigation;
  }

  render() {
    const { title, backgroundColor } = this.options;
    const {
      isNoBack, customTitle, customBackgroundColor, rightComponent,
    } = this.props;
    return (
      <Header
        leftComponent={isNoBack ? null : <LeftButton navigation={this.navigation} />}
        centerComponent={{ text: customTitle || title, style: centerTextStyle }}
        outerContainerStyles={{
          backgroundColor: customBackgroundColor || backgroundColor || brand_primary,
          ...outerContainerStyles,
        }}
        rightComponent={rightComponent}
      />
    );
  }
}

export default HeaderComponent;
