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
    {...props}
    style={tabBarStyle}
    labelStyle={labelStyle}
    indicatorStyle={tabBarUnderlineStyle}
   />);

  _renderPager = props => (<TabViewPagerExperimental
    {...props}
    GestureHandler={GestureHandler}
  />);

  switchPage(key) {
    switch (key) {
      case 'detail':
        return <ComicDetail />;
      case 'list':
        return <ComicList />;
      default:
        return null;
    }
  }
  _renderScene = ({ route, index }) => {
    if (this.state.index === index) { // 懒加载, 其他标签页不渲染
      this._renderScene = ({route}) => this.switchPage(route.key); // 覆盖原来的渲染函数
      return this.switchPage(route.key);
    }
    return null;
  }
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
        swipeEnabled
      />
    );
  }
}


export default ComicDetailTabsComponent;
