import React from 'react';
import { StackNavigator } from 'react-navigation';
import { LoginScreen, ComicDetailScreen, ComicContentScreen } from '../modules';
import { default as TabNavigator } from './tab_navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

const RootStack = StackNavigator(
  {
    TabStack: { screen: TabNavigator },
    Login: { screen: LoginScreen },
    ComicDetail: { screen: ComicDetailScreen },
    ComicContent: { screen: ComicContentScreen },
  },
  {
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal, // 页面切换动画改为自定义:横向
    }),
  },
);

export default RootStack;
