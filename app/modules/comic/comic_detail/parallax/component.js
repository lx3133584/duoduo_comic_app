import React from 'react';
import { View } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { brand_primary } from '../../../../theme';
import { ComicDetailTop, ComicDetailBtns, ComicDetailTabs, DetailHeader } from '..';

export default function ParallaxComponent({ hideLoading }) {
  return (
    <ParallaxScrollView
      backgroundColor={brand_primary}
      contentBackgroundColor="#f1f2f6"
      parallaxHeaderHeight={240}
      renderStickyHeader={() => <DetailHeader />}
      stickyHeaderHeight={70}
      useNativeDriver
      renderForeground={() => (
       <ComicDetailTop hideLoading={hideLoading} />
      )}>
      <View>
        <ComicDetailBtns />
        <ComicDetailTabs />
      </View>
    </ParallaxScrollView>
  )
}
