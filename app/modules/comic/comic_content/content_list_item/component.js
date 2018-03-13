import React, { PureComponent } from 'react';
import { Image } from '../../..';
import PropTypes from 'prop-types';
import { Dimensions, Image as img } from 'react-native';
const { width } = Dimensions.get('window');
const getSize = img.getSize;
const buttonStyle = {
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 4,
  height: 30,
  padding: 10,
  margin: 2,
  elevation: 0,
}
const textStyle = {
  fontWeight: 'normal',
  color: '#333',
  fontSize: 12,
}

class ContentListItem extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
  };
  state = {
    width,
    height: 300
  };
  constructor() {
    super();
  };
  componentDidMount() {
    const {url} = this.props;
    getSize(url, (imgWidth, imgHeight) => {
      this.setState({ height: imgHeight / imgWidth * width })
    });
  };
  render() {
    const {url} = this.props;
    return (
      <Image
        source={{ uri: url }}
        imageStyle={this.state}
      />
    );
  }
}

export default ContentListItem;
