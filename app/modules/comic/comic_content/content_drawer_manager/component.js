import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';
import styled from "styled-components";
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { ContentHeader, ContentDrawerMenu, ContentDrawerProgress } from '..';
const { width } = Dimensions.get('window');
const HEADER_HEIGHT = 60;
const containStyle = {
  position: 'absolute',
  left: 0,
  width,
  backgroundColor:'rgba(0, 0, 0, 0.8)',
  zIndex: 2,
}

const bottom_map = {
  main: {
    Component: ContentDrawerMenu,
    height: ContentDrawerMenu.height,
  },
  progress: {
    Component: ContentDrawerProgress,
    height: ContentDrawerProgress.height,
  },
}

class ContentDrawerManagerComponent extends PureComponent {
  static propTypes = {
    show: PropTypes.bool.isRequired,
  };
  state = {
    bottomType: 'main',
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.props.show) this.toggleDrawer();
  };
  _getRef = type => ref => this[type] = ref;
  toggleDrawer = () => {
    const { bottomType } = this.state;
    const { show } = this.props;
    show || this.setState({ bottomType: 'main' });
    const { height } = bottom_map[show ? bottomType : 'main'];
    const ease = show ? 'ease-out': 'ease-in';
    const duration = 200;
    this.topComponent.transitionTo({ top: show ? -HEADER_HEIGHT : 0 }, duration, ease);
    this.bottomComponent.transitionTo({ bottom: show ? -height : 0, height }, duration, ease);
  };
  switchBottomType = type => {
    const { height } = bottom_map[type];
    this.topComponent.transitionTo({ top: -HEADER_HEIGHT }, 200, 'ease-out');
    this.setState({ bottomType: type });
    this.bottomComponent.transitionTo({ height }, 200, 'ease');
  };
  render() {
    const { bottomType } = this.state;
    const { Component, height } = bottom_map[bottomType];
    return ([
      <Animatable.View
        ref={this._getRef('topComponent')}
        style={[ containStyle, { top: -HEADER_HEIGHT, height: HEADER_HEIGHT } ]}
        key="top">
        <ContentHeader />
      </Animatable.View>,
      <Animatable.View
        ref={this._getRef('bottomComponent')}
        style={[ containStyle, { bottom: -height, height } ]}
        key="bottom">
        <Component switchBottomType={this.switchBottomType} />
      </Animatable.View>
    ]);
  }
}

export default ContentDrawerManagerComponent;