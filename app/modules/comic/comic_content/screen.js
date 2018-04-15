import React, { PureComponent } from 'react';
import styled from "styled-components";
import { StatusBar, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { wrapWithLoading } from '../../../utils';
import { LoadingPage } from '..';
import { ContentList, ContentStatusBar, ContentDrawerManager } from '.';
import { connect } from 'react-redux';
import Orientation from 'react-native-orientation';
import DeviceBrightness from 'react-native-device-brightness';
import { configActions } from '../..';

const ContainStyled = styled.View`
  background-color: #282828;
`
@wrapWithLoading
class ContentListScreen extends PureComponent {
  static propTypes = {
    hideLoading: PropTypes.func.isRequired,
    changeWidth: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    orientation: PropTypes.string.isRequired,
    brightness: PropTypes.number.isRequired,
    navigation: PropTypes.shape({
      addListener: PropTypes.func.isRequired,
    }),
  };
  static navigationOptions = {
    title: '漫画内容',
  };
  componentDidMount() {
    this.initConfig();
    this.willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      () => {
        Orientation.lockToPortrait();
      }
    );
  };
  componentWillUnmount() {
    this.willBlurSubscription.remove();
  };
  state = {
    show_drawer: false,
  };
  initConfig = () => {
    this.initOrientation();
    this.initBrightness();
  };
  initOrientation = () => {
    const { orientation, changeWidth } = this.props;
    if (orientation === 'vertical') return;
    Orientation.lockToLandscape();
    changeWidth(Dimensions.get('window').height);
  };
  initBrightness = () => {
    const { brightness } = this.props;
    DeviceBrightness.setBrightnessLevel(brightness);
  };
  toggleDrawer = () => {
    this.setState(({ show_drawer }) => {
      return { show_drawer: !show_drawer }
    });
  };
  render() {
    const { loading, hideLoading, width } = this.props;
    const { show_drawer } = this.state;
    return ([
      <LoadingPage show={loading} key="loading" width={width} />,
      <ContentDrawerManager key="drawer" show={show_drawer} />,
      <ContentStatusBar key="status_bar"/>,
      <ContainStyled key="content">
        <StatusBar hidden />
        <ContentList loading={loading} toggleDrawer={this.toggleDrawer} hideLoading={hideLoading} />
      </ContainStyled>
    ])};
}

const mapStateToProps = (state, ownProps) => {
  return {
    orientation: state['config'].get('orientation'),
    brightness: state['config'].get('brightness'),
    width: state['config'].get('width'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeWidth(params) {
    return dispatch(configActions.changeWidth(params));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentListScreen);
