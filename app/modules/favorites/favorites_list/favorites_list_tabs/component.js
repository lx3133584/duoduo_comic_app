import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';
import { FavoritesList, HistoryList } from '..';
import { Dimensions } from 'react-native';
import {
  TabViewAnimated, TabViewPagerPan, TabBar, SceneMap,
} from 'react-native-tab-view';
import { LoginNowButton } from '../../..';
import { brand_primary } from '../../../../theme';

const { width, height } = Dimensions.get('window');

const ContainStyled = styled.View`
  height: ${height * 0.7};
  justify-content: center;
`;
const initialLayout = {
  height: 0,
  width,
};
const tabBarStyle = {
  backgroundColor: brand_primary,
};
const tabStyle = {
  width: width / 5,
};
const labelStyle = {
  color: '#fff',
};
const tabBarUnderlineStyle = {
  backgroundColor: '#fff',
  height: 4,
  borderRadius: 10,
};

class ComicDetailTabsComponent extends PureComponent {
  static propTypes = {
    info: ImmutablePropTypes.map.isRequired,
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
  }

  componentWillReceiveProps(nextProps) {
    const { params } = nextProps.navigation.state;
    if (params && (params.index !== this.state.index)) {
      this.setState({ index: params.index || 0 });
    }
  }

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (
    <TabBar
      style={tabBarStyle}
      labelStyle={labelStyle}
      tabStyle={tabStyle}
      indicatorStyle={tabBarUnderlineStyle}
      {...props}
    />
  );

  switchPage(key) {
    switch (key) {
      case 'favorite':
        return <FavoritesList />;
      case 'history':
        return <HistoryList />;
      default:
        return null;
    }
  }

  _renderPager = props => (
    <TabViewPagerPan
      swipeEnabled
      {...props}
    />
  );

  _renderScene = ({ route, index }) => {
    const { info } = this.props;
    if (!info.size) {
      return (
        <ContainStyled>
          <LoginNowButton large />
        </ContainStyled>
      );
    }
    return this.switchPage(route.key);
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
      />
    );
  }
}


export default ComicDetailTabsComponent;
