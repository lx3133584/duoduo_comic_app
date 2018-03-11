import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Tabs } from 'antd-mobile';
import { Text } from 'react-native';
import { ComicList } from '..';

const tabs = [
  { title: '详情' },
  { title: '目录' },
];

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
  constructor() {
    super();
  };
  render() {
    const { page_id } = this.props.navigation.state.params;
    return (
      <Tabs tabs={tabs}
        initialPage={page_id || 0}
        tabBarActiveTextColor="#333"
        tabBarInactiveTextColor="#999"
        tabBarUnderlineStyle={tabBarUnderlineStyle}
      >
        <Text>Content of 11111 tab</Text>
        <ComicList />
      </Tabs>
    );
  }
}

export default ComicDetailTabsComponent;
