import React from 'react';
import { View } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { brand_primary } from '../../../../theme';
import {
  ComicDetailTop, ComicDetailBtns, ComicDetailTabs, DetailHeader, DetailBackButton,
} from '..';

export default function ParallaxComponent({ hideLoading }) {
  return (
    <ParallaxScrollView
      backgroundColor={brand_primary}
      contentBackgroundColor="#f1f2f6"
      parallaxHeaderHeight={240}
      renderStickyHeader={() => <DetailHeader />}
      renderFixedHeader={() => <DetailBackButton />}
      stickyHeaderHeight={70}
      useNativeDriver
      renderForeground={() => (
        <ComicDetailTop hideLoading={hideLoading} />
      )}
    >
      <View>
        <ComicDetailBtns />
        <ComicDetailTabs />
      </View>
    </ParallaxScrollView>
  );
}
