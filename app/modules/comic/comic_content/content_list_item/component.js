import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Image } from 'react-native';
import PhotoView from 'react-native-photo-view';
import { ImgPlaceholder } from '..';
import { wrapWithLoading } from '../../../../utils';
const { width, height } = Dimensions.get('window');
const getSize = Image.getSize;

class ContentListItem extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    hideLoading: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };
  state = {
    width,
    height: 500,
  };
  constructor() {
    super();
  };
  componentDidMount() {
    const { url, hideLoading } = this.props;
    getSize(url, (imgWidth, imgHeight) => {
      this.setState({ height: imgHeight / imgWidth * width });
      hideLoading();
    }, (error) => {
      this.setState({ height });
      hideLoading();
    });
  };
  render() {
    const { url, index, loading } = this.props;
    if (loading) return <ImgPlaceholder style={this.state}>{index}</ImgPlaceholder>;
    return (
      <PhotoView
        source={{ uri: url }}
        style={this.state}
      />
    );
  }
}

export default wrapWithLoading(ContentListItem);
