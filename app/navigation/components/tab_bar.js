import React from 'React';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ICON_SIZE = 20;

const BookIcon = ({ color }) => <Entypo name="book" size={ICON_SIZE} color={color} />;
const DiscoveryIcon = ({ color }) => <Entypo name="compass" size={ICON_SIZE} color={color} />;
const SearchIcon = ({ color }) => <FontAwesome name="search" size={ICON_SIZE} color={color} />;
const UserIcon = ({ color }) => <FontAwesome name="user" size={ICON_SIZE} color={color} />;


const TabBar = ({ navigation }) => ({
  tabBarIcon: ({ focused, tintColor }) => {
    const { routeName } = navigation.state;
    let TabBarIcon = UserIcon;
    switch (routeName) {
      case 'Favorites':
        TabBarIcon = BookIcon;
        break;
      case 'Search':
        TabBarIcon = SearchIcon;
        break;
      case 'Discovery':
        TabBarIcon = DiscoveryIcon;
        break;
      case 'User':
        TabBarIcon = UserIcon;
        break;
    }
    return <TabBarIcon color={tintColor} />;
  },
});
export default TabBar;
