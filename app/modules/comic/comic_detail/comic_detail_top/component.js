import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { BlurView } from 'react-native-blur';
import { Image, Dimensions, findNodeHandle, View } from 'react-native';
const { width } = Dimensions.get('window');

const ContainStyled = styled.View`
  height: 180px;
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
  height: 180,
  zIndex: 1,
}
const blackBgStyle = {
  backgroundColor: '#000',
  opacity: 0.6,
  zIndex: 3,
}
const TextContainStyled = styled.View`
  position: absolute;
  top: 60px;
  left: 20px;
  bottom: 15px;
  z-index: 4;
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
    this.imageLoaded = this.imageLoaded.bind(this)
  };
  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    this.onFetch(id);
  };
  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  };
  async onFetch(id) {
    const { getDetail } = this.props;
    return await getDetail(id);
  };
  render() {
    const detail = this.props.detail.toJS();
    const { viewRef } = this.state;
    return (
      <ContainStyled>
        <Image
          ref={(img) => { this.backgroundImage = img }}
          style={blurImageStyled}
          onLoadEnd={this.imageLoaded}
          source={{uri: detail.cover}}
        />
        {viewRef ? <BlurView
          style={blurImageStyled}
          viewRef={viewRef}
          blurType="dark"
          blurAmount={6}
        /> : <View
          style={[blurImageStyled, blackBgStyle]}
        />}
        <Image
          style={coverImageStyled}
          source={{uri: detail.cover}}
        />
        <TextContainStyled>
          <TitleStyled>{detail.title}</TitleStyled>
          <BottomTextStyled>{detail.author}</BottomTextStyled>
          <BottomTextContainStyled>
            <BottomTextStyled>人气 {detail.popularity_number || 0}</BottomTextStyled>
          </BottomTextContainStyled>
        </TextContainStyled>
      </ContainStyled>
    );
  }
}

export default ComicDetailTopComponent;
