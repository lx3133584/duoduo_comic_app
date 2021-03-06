import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import {
  LoginScreen,
  RegisterScreen,
  UserInfoEditScreen,
  PasswordEditScreen,
  ComicDetailScreen,
  ComicContentScreen,
  RankItemListScreen,
  ClasskItemListScreen,
  ComicContentListDrawerScreen,
} from '@';
import TabNavigator from './tab_navigation';

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
    UserInfoEdit: { screen: UserInfoEditScreen },
    PasswordEdit: { screen: PasswordEditScreen },
    ComicDetail: { screen: ComicDetailScreen },
    // ComicContent: { screen: ComicContentScreen },
    ComicContent: { screen: ComicContentDrawer },
    RankItemList: { screen: RankItemListScreen },
    ClasskItemList: { screen: ClasskItemListScreen },
  },
  {
    navigationOptions: () => ({
      header: null,
    }),
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal, // 页面切换动画改为自定义:横向
    }),
  },
);

export default RootStack;
