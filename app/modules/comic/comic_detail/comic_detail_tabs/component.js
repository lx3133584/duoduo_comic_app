import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Tabs } from 'antd-mobile';

const tabs = [
  { title: '详情' },
  { title: '目录' },
];

const ContainStyled = styled.View`
  padding: 5px;
  min-height: 300px;
`
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
      <ContainStyled>
        <Tabs tabs={tabs}
          initialPage={page_id || 1}
          tabBarActiveTextColor="#333"
          tabBarInactiveTextColor="#999"
          tabBarUnderlineStyle={tabBarUnderlineStyle}
        >
          <TabsTitleStyled>Content of 11111 tab</TabsTitleStyled>
          <TabsTitleStyled>Content of 222222 tab</TabsTitleStyled>
        </Tabs>
      </ContainStyled>
    );
  }
}

export default ComicDetailTabsComponent;
