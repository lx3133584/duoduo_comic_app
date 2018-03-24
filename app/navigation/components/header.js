import React, { PureComponent } from 'react';
import { Header } from 'react-native-elements';
import { brand_primary } from '../../theme';
import LeftButton from './left_button';
import PropTypes from 'prop-types';

const centerTextStyle = {
  color: '#fff',
  fontSize: 16,
}
const outerContainerStyles = {
  padding: 0,
  paddingBottom: 15,
  height: 50,
  borderBottomWidth: 0,
}

class HeaderComponent extends PureComponent {
  static propTypes = {
    scene: PropTypes.object,
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }),
    getScreenDetails: PropTypes.func,
    isNoBack: PropTypes.bool,
  };
  options = {
  };
  constructor(props) {
    super(props);
    const { getScreenDetails, scene, navigation } = props;
    if (!getScreenDetails || !scene || !navigation) return;
    const { options } = getScreenDetails(scene);
    this.options = options;
    this.navigation = navigation;
  };
  render() {
    const { title, backgroundColor } = this.options;
    const { isNoBack, customTitle } = this.props;
    return (
      <Header
        leftComponent={isNoBack ? null : <LeftButton navigation={this.navigation} />}
        centerComponent={{ text: customTitle || title, style: centerTextStyle }}
        outerContainerStyles={{ backgroundColor: backgroundColor || brand_primary, ...outerContainerStyles }}
        rightComponent={null}
      />
    );
  }
}

export default HeaderComponent;
