import React, { PureComponent } from 'react';
import { Header } from 'react-native-elements';
import { brand_primary } from '../../../theme';
import LeftButton from './left_button';

class HeaderComponent extends PureComponent {
  constructor(props) {
    super(props);
    const { getScreenDetails, scene, navigation } = props;
    const { options } = getScreenDetails(scene);
    this.options = options;
    this.navigation = navigation;
  };
  render() {
    return (
      <Header
        leftComponent={<LeftButton navigation={this.navigation} />}
        centerComponent={{ text: this.options.title, style: { color: '#000' } }}
        outerContainerStyles={{ backgroundColor: '#fff' }}
        rightComponent={null}
      />
    );
  }
}

export default HeaderComponent;
