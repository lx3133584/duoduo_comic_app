import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Image } from 'react-native';
import { ImgPlaceholder } from '..';
import { wrapWithLoading } from '../../../../utils';
const { width } = Dimensions.get('window');
const prefetch = Image.prefetch;

class ContentListItem extends PureComponent {
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
  constructor() {
    super();
  };
  async preFetchImage() {
    const { url, hideLoading } = this.props;
    await prefetch(url);
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
