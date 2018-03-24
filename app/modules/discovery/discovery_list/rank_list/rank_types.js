import React from 'React';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ICON_SIZE = 20;
const ICON_COLOR = '#fff';

const FireIcon = () => <MaterialCommunityIcons name="fire" size={ICON_SIZE} color={ICON_COLOR} />;
const FavoriteIcon = () => <MaterialIcons name="favorite" size={ICON_SIZE} color={ICON_COLOR} />;
const YelpIcon = () => <FontAwesome name="yelp" size={ICON_SIZE} color={ICON_COLOR} />;
const StarIcon = () => <FontAwesome name="star-half-full" size={ICON_SIZE} color={ICON_COLOR} />;

export default [
  {
    id: 0,
    name: '人气排行榜',
    key: 'popularity_number',
    Icon: FireIcon,
  },
  {
    id: 1,
    name: '收藏排行榜',
    key: 'collection_number',
    Icon: FavoriteIcon,
  },
  {
    id: 2,
    name: '评价数排行榜',
    key: 'score_number',
    Icon: YelpIcon,
  },
  {
    id: 3,
    name: '评分排行榜',
    key: 'score',
    Icon: StarIcon,
  },
]
