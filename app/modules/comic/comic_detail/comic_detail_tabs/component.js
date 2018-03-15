import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { ComicList, ComicDetail } from '..';
import { Dimensions } from 'react-native';
import { TabViewAnimated, TabViewPagerExperimental, TabBar, SceneMap } from 'react-native-tab-view';
import * as GestureHandler from 'react-native-gesture-handler';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
}
const tabBarStyle = {
  backgroundColor: '#fff',
}
const labelStyle = {
  color: '#333',
}
const tabBarUnderlineStyle = {
  backgroundColor: '#333',
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
    const { page_id } = props.navigation.state.params;
    this.state = {
      index: page_id || 0,
      routes: [
        { title: '详情', key: 'detail' },
        { title: '目录', key: 'list' },
      ],
    };
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (<TabBar
    style={tabBarStyle}
    labelStyle={labelStyle}
    indicatorStyle={tabBarUnderlineStyle}
     {...props}
   />);

  _renderPager = props => (<TabViewPagerExperimental
    swipeEnabled
    {...props}
    GestureHandler={GestureHandler}
  />);

  _renderScene = SceneMap({
    detail: ComicDetail,
    list: ComicList,
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
