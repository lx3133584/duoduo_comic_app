import React from 'react';
import {
  Scene,
  Router,
  Stack,
  Tabs,
  Lightbox,
} from 'react-native-router-flux';
import StyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import {
  FavoritesListScreen,
  SearchListScreen,
  DiscoveryListScreen,
  UserInfoScreen,
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

import onBackPress from './onBack';
import { Header, TabIcon } from './components';
import { brand_primary } from '~/theme';

const RootRoute = () => (
  <Router backAndroidHandler={onBackPress}>
    <Lightbox>
      <Stack
        key="root"
        transitionConfig={() => ({
          screenInterpolator: StyleInterpolator.forHorizontal,
        })}
        navBar={Header}
      >
        <Tabs
          hideNavBar
          activeTintColor={brand_primary}
          activeBackgroundColor="#fff"
          inactiveBackgroundColor="#fff"
          tabBarPosition="bottom"
          animationEnabled={false}
          lazy={false}
          key="tabs"
          initial
          swipeEnabled={false}
        >
          <Scene
            key="favorites"
            icon={TabIcon.BookIcon}
            component={FavoritesListScreen}
            title="书架"
            hideNavBar
            initial
          />
          <Scene
            key="search"
            icon={TabIcon.SearchIcon}
            component={SearchListScreen}
            title="搜索"
            hideNavBar
          />
          <Scene
            key="discover"
            icon={TabIcon.DiscoveryIcon}
            component={DiscoveryListScreen}
            title="发现"
            hideNavBar
          />
          <Scene
            key="user"
            icon={TabIcon.UserIcon}
            component={UserInfoScreen}
            title="用户"
            hideNavBar
          />
        </Tabs>
        <Scene
          key="login"
          component={LoginScreen}
          title="登录"
        />
        <Scene
          key="register"
          component={RegisterScreen}
          title="注册"
        />
      </Stack>
    </Lightbox>
  </Router>
);

export default RootRoute;
