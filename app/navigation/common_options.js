import React from 'React';
import { LeftButton, HeaderTitle } from './components';

export default {
  navigationOptions({navigation}) {
    return {
      headerTitle: (props) => <HeaderTitle {...props} />,
      headerLeft: <LeftButton navigation={navigation}/>,
    }
  },
}
