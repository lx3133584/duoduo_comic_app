import React from 'React';
import { TabNavigator, TabBarBottom  } from 'react-navigation';
import { UserStack, SearchStack } from './stack_navigation';
import DEFAULT_THEME from '../../theme';
import { TabBar } from './components';

export default TabNavigator({
  Search: {
    screen: SearchStack
  },
  User: {
    screen: UserStack
  }
}, {
  navigationOptions: TabBar,
  tabBarOptions: {
    activeTintColor: DEFAULT_THEME.brand_primary,
    inactiveTintColor: '#949494',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false
});
