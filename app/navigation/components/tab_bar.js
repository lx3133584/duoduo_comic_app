import React from 'react';
import PropTypes from 'prop-types';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ICON_SIZE = 20;

const BookIcon = ({ color }) => <Entypo name="book" size={ICON_SIZE} color={color} />;
const DiscoveryIcon = ({ color }) => <Entypo name="compass" size={ICON_SIZE} color={color} />;
const SearchIcon = ({ color }) => <FontAwesome name="search" size={ICON_SIZE} color={color} />;
const UserIcon = ({ color }) => <FontAwesome name="user" size={ICON_SIZE} color={color} />;
const iconType = {
  color: PropTypes.string.isRequired,
};
BookIcon.propTypes = iconType;
DiscoveryIcon.propTypes = iconType;
SearchIcon.propTypes = iconType;
UserIcon.propTypes = iconType;

const TabBar = ({ navigation }) => ({
  /* eslint-disable-next-line */
  tabBarIcon: ({ tintColor }) => {
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
      default:
        TabBarIcon = UserIcon;
    }
    return <TabBarIcon color={tintColor} />;
  },
});
export default TabBar;
