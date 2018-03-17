import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Image } from 'react-native';
import PhotoView from 'react-native-photo-view';
const { width, height } = Dimensions.get('window');
const getSize = Image.getSize;

class ContentListItem extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
  };
  state = {
    width,
    height: 500,
  };
  constructor() {
    super();
  };
  componentDidMount() {
    const {url} = this.props;
    getSize(url, (imgWidth, imgHeight) => {
      this.setState({ height: imgHeight / imgWidth * width })
    }, (error) => {
      this.setState({ height })
    });
  };
  render() {
    const { url } = this.props;
    return (
      <PhotoView
        source={{ uri: url }}
        style={this.state}
      />
    );
  }
}

export default ContentListItem;
