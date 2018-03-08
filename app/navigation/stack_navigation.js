import React from 'react';
import { StackNavigator } from 'react-navigation';
import { LoginScreen } from '../modules';
import { default as TabNavigator } from './tab_navigation';
import { Header } from './components';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

const HeaderStack = StackNavigator(
  {
    Login: { screen: LoginScreen },
  },
  {
    navigationOptions: ({navigation}) => ({
      header: (props) => <Header {...props} />,
    }),
  },
);

const RootStack = StackNavigator(
  {
    TabStack: { screen: TabNavigator },
    HeaderStack: { screen: HeaderStack },
  },
  {
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
  },
);

export default RootStack;
