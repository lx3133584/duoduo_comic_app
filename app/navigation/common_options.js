import React from 'React';
import { Header } from './components';

export default {
  navigationOptions({navigation}) {
    return {
      header: (props) => <Header {...props} />
    }
  },
}
