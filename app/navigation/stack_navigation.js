import React from 'react';
import { StackNavigator } from 'react-navigation';
import { LoginScreen, ComicDetailScreen, ComicContentScreen } from '../modules';
import { default as TabNavigator } from './tab_navigation';
import { Header } from './components';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

const HeaderStack = StackNavigator(
  {
    Login: { screen: LoginScreen },
    ComicDetail: { screen: ComicDetailScreen },
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
    ComicContent: { screen: ComicContentScreen },
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
