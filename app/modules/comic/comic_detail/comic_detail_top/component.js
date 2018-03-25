import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { BlurView } from 'react-native-blur';
import { Image, Dimensions, findNodeHandle, View } from 'react-native';
import { numberFormat } from '../../../../utils';

const { width } = Dimensions.get('window');

const ContainStyled = styled.View`
  height: 240px;
  background-color: #000;
`
const coverImageStyled = {
  position: 'absolute',
  bottom: 10,
  right: 10,
  height: 120,
  width: 85,
  zIndex: 2,
  borderWidth: 1,
  borderColor: '#fff',
}
const blurImageStyled = {
  position: 'absolute',
  top: 0,
  left: 0,
  width,
  height: 240,
  zIndex: 1,
}
const TextContainStyled = styled.View`
  position: absolute;
  top: 100px;
  left: 20px;
  bottom: 15px;
  z-index: 4;
  width: ${width};
`
const TitleStyled = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`
const BottomTextContainStyled = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
`
const BottomTextStyled = styled.Text`
  color: #fff;
  font-size: 12px;
  opacity: 0.8;
`

class ComicDetailTopComponent extends PureComponent {
  static propTypes = {
    getDetail: PropTypes.func.isRequired,
    hideLoading: PropTypes.func.isRequired,
    detail: ImmutablePropTypes.map.isRequired,
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.object.isRequired,
      }),
    }),
  };
  state = {
    viewRef: null,
  };
  constructor() {
    super();
    this.onFetch = this.onFetch.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
  };
  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    this.onFetch(id);
  };
  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) }, this.hideLoading);
  };
  async onFetch(id) {
    const { getDetail } = this.props;
    await getDetail(id);
    this.fetchCompleted = true; // 标识请求已完成
    this.hideLoading();
  };
  hideLoading() {
    const { hideLoading } = this.props;
    if (!this.state.viewRef || !this.fetchCompleted) return; // blur组件未加载或者请求为完成时都不能隐藏loading
    hideLoading();
  }
  render() {
    const { detail, navigation } = this.props;
    const { viewRef } = this.state;
    const cover = detail.get('cover');
    const title = detail.get('title');
    const author = detail.get('author');
    const class_name = detail.get('class_name');
    const popularity_number = detail.get('popularity_number');
    return (
      <ContainStyled>
        <Image
          ref={(img) => { this.backgroundImage = img }}
          style={blurImageStyled}
          onLoadEnd={this.imageLoaded}
          source={{uri: cover}}
        />
        {viewRef && <BlurView
          style={blurImageStyled}
          viewRef={viewRef}
          blurType="dark"
          blurAmount={6}
        />}
        <Image
          style={coverImageStyled}
          source={{uri: cover}}
        />
        <TextContainStyled>
          <TitleStyled>{title}</TitleStyled>
          <BottomTextStyled>{author}</BottomTextStyled>
          <BottomTextContainStyled>
            <BottomTextStyled>{class_name && (class_name + ' | ')}人气 {numberFormat(popularity_number)}</BottomTextStyled>
          </BottomTextContainStyled>
        </TextContainStyled>
      </ContainStyled>
    );
  }
}

export default ComicDetailTopComponent;
