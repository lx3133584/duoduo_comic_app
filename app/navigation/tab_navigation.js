import React from 'React';
import { TabNavigator, TabBarBottom  } from 'react-navigation';
import { UserInfoScreen, SearchListScreen } from '../modules';
import DEFAULT_THEME from '../../theme';
import { TabBar } from './components';

export default TabNavigator({
  Search: { screen: SearchListScreen },
  User: { screen: UserInfoScreen },
},
{
  navigationOptions: TabBar,
  tabBarOptions: {
    activeTintColor: DEFAULT_THEME.brand_primary,
    inactiveTintColor: '#949494',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
});
