import { StackNavigator } from 'react-navigation';
import { UserInfoScreen, SearchListScreen } from '../modules';
import commonOptions from './common_options';

export const UserStack = StackNavigator(
  {
    UserInfo: { screen: UserInfoScreen },
  },
  commonOptions,
);

export const SearchStack = StackNavigator(
  {
    SearchList: { screen: SearchListScreen },
  },
  commonOptions,
);
