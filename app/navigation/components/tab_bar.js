import React from 'React';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';

const ICON_SIZE = 20;

const BookIcon = ({ color }) => <Entypo name="book" size={ICON_SIZE} color={color} />;
const GridIcon = ({ color }) => <MaterialCommunityIcons name="view-grid" size={ICON_SIZE} color={color} />;
const RankIcon = ({ color }) => <Foundation name="graph-bar" size={ICON_SIZE} color={color} />;
const SearchIcon = ({ color }) => <FontAwesome name="search" size={ICON_SIZE} color={color} />;
const UserIcon = ({ color }) => <FontAwesome name="user" size={ICON_SIZE} color={color} />;


const TabBar = ({ navigation }) => ({
  tabBarIcon: ({ focused, tintColor }) => {
    const { routeName } = navigation.state;
    let TabBarIcon = UserIcon;
    switch (routeName) {
      case 'Book':
        TabBarIcon = BookIcon;
        break;
      case 'Grid':
        TabBarIcon = GridIcon;
        break;
      case 'Rank':
        TabBarIcon = RankIcon;
        break;
      case 'Search':
        TabBarIcon = SearchIcon;
        break;
      case 'User':
        TabBarIcon = UserIcon;
        break;
    }
    return <TabBarIcon color={tintColor} />
  },
  header: null,
})
export default TabBar;
