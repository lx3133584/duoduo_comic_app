import React from 'react';
import styled from "styled-components";
import { View } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { brand_primary } from '../../../../theme';
import { ComicDetailTop, ComicDetailBtns, ComicDetailTabs, DetailHeader } from '..';

const ContainStyled = styled.View`
  padding: 20px 0;
  justify-content: center;
  align-items: center;
`
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
