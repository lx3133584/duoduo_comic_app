import React from 'React';
import { TabNavigator, TabBarBottom  } from 'react-navigation';
import { UserInfoScreen, SearchListScreen, FavoritesListScreen } from '../modules';
import { brand_primary } from '../theme';
import { TabBar } from './components';

export default TabNavigator({
  Favorites: { screen: FavoritesListScreen },
  Search: { screen: SearchListScreen },
  User: { screen: UserInfoScreen },
},
{
  initialRouteName: 'Favorites',
  backBehavior: 'none',
  navigationOptions: TabBar,
  tabBarOptions: {
    activeTintColor: brand_primary,
    inactiveTintColor: '#949494',
    indicatorStyle: { height: 0 },
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
});
