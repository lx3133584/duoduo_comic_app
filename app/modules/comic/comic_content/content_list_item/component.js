import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Image } from 'react-native';
import { ImgPlaceholder } from '..';
import { wrapWithLoading } from '../../../../utils';
const { width, height } = Dimensions.get('window');
// const getSize = Image.getSize;
const prefetch = Image.prefetch;

class ContentListItem extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    hideLoading: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    size: PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
    }),
  };
  // state = {
  //   width,
  //   height: 0,
  // };
  // retry = 3; // 重试次数
  constructor() {
    super();
  };
  // getImageSize() {
  //   const { url } = this.props;
  //   getSize(url, (imgWidth, imgHeight) => {
  //     this.setState({ height: imgHeight / imgWidth * width });
  //   }, (error) => {
  //     if (!this.retry) {
  //       this.getImageSize();
  //       this.retry--;
  //     }
  //   });
  // };
  async preFetchImage() {
    const { url, hideLoading } = this.props;
    await prefetch(url);
    // this.getImageSize();
    hideLoading();
  };
  componentDidMount() {
    this.preFetchImage();
  };
  render() {
    const { url, index, loading, size } = this.props;
    const style = {
      width,
      height: size.height / size.width * width,
    };
    if (loading) return <ImgPlaceholder style={style}>{index}</ImgPlaceholder>;
    return (
      <Image
        source={{ uri: url }}
        style={style}
      />
    );
  }
}

export default wrapWithLoading(ContentListItem);
