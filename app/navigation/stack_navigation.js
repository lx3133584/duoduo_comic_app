import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import {
  LoginScreen,
  RegisterScreen,
  ComicDetailScreen,
  ComicContentScreen,
  RankItemListScreen,
  ClasskItemListScreen,
  ComicContentListDrawerScreen,
} from '../modules';
import { default as TabNavigator } from './tab_navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
const { width } = Dimensions.get('window');

const ComicContentDrawer = DrawerNavigator(
  {
    ComicContentNavigator: { screen: ComicContentScreen },
  },
  {
    drawerWidth: width * 0.7,
    drawerPosition: 'right',
    contentComponent: ComicContentListDrawerScreen,
    drawerBackgroundColor: '#333',
  },
);
const RootStack = StackNavigator(
  {
    TabStack: { screen: TabNavigator },
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
    ComicDetail: { screen: ComicDetailScreen },
    // ComicContent: { screen: ComicContentScreen },
    ComicContent: { screen: ComicContentDrawer },
    RankItemList: { screen: RankItemListScreen },
    ClasskItemList: { screen: ClasskItemListScreen },
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
