import { StackNavigator } from 'react-navigation';
import { UserInfoScreen, SearchListScreen } from '../modules';
import commonOptions from './common_options';

export const UserStack = StackNavigator(
  {
    User: { screen: UserInfoScreen },
  },
  commonOptions,
);

export const SearchStack = StackNavigator(
  {
    Search: { screen: SearchListScreen },
  },
  commonOptions,
);
