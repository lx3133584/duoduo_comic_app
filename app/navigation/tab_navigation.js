import React from 'React';
import { TabNavigator, TabBarBottom  } from 'react-navigation';
import { UserInfoScreen, SearchListScreen, FavoritesListScreen } from '../modules';
import DEFAULT_THEME from '../../theme';
import { TabBar } from './components';

export default TabNavigator({
  Favorites: { screen: FavoritesListScreen },
  Search: { screen: SearchListScreen },
  User: { screen: UserInfoScreen },
},
{
  initialRouteName: 'Favorites',
  navigationOptions: TabBar,
  tabBarOptions: {
    activeTintColor: DEFAULT_THEME.brand_primary,
    inactiveTintColor: '#949494',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  lazy: true,
});
