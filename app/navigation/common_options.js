import React from 'React';
import { Header } from './components';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

export default {
  navigationOptions: ({navigation}) => ({
    header: (props) => <Header {...props} />,
  }),
  transitionConfig: () => ({
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
  }),
}
