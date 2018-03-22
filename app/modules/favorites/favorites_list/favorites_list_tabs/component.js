import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { FavoritesList, HistoryList } from '..';
import { Dimensions } from 'react-native';
import { TabViewAnimated, TabViewPagerExperimental, TabViewPagerPan, TabBar, SceneMap } from 'react-native-tab-view';
import * as GestureHandler from 'react-native-gesture-handler';
import { brand_primary } from '../../../../theme';
const { width } = Dimensions.get('window');

const initialLayout = {
  height: 0,
  width,
}
const tabBarStyle = {
  backgroundColor: brand_primary,
}
const tabStyle = {
  width: width / 5,
}
const labelStyle = {
  color: '#fff',
}
const tabBarUnderlineStyle = {
  backgroundColor: '#fff',
  height: 4,
  borderRadius: 10,
}

class ComicDetailTabsComponent extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.object,
      }),
    }),
  };
  constructor(props) {
    super(props);
    const { params } = props.navigation.state;
    this.state = {
      index: params ? params.index || 0 : 0,
      routes: [
        { title: '收藏', key: 'favorite' },
        { title: '历史', key: 'history' },
      ],
    };
  };

  componentWillReceiveProps(nextProps) {
    const { params } = nextProps.navigation.state;
    if (params && (params.index !== this.state.index)) {
      this.setState({ index: params.index || 0 })
    }
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (<TabBar
    style={tabBarStyle}
    labelStyle={labelStyle}
    tabStyle={tabStyle}
    indicatorStyle={tabBarUnderlineStyle}
     {...props}
   />);

  _renderPager = props => (<TabViewPagerPan
    swipeEnabled
    {...props}
    GestureHandler={GestureHandler}
  />);

  _renderScene = SceneMap({
    favorite: FavoritesList,
    history: HistoryList,
  });

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        renderPager={this._renderPager}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        useNativeDriver
      />
    );
  }
}


export default ComicDetailTabsComponent;
