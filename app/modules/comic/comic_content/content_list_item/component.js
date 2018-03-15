import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Image } from 'react-native';
import PhotoView from 'react-native-photo-view';
import Progress from 'react-native-progress/Circle';
import { brand_primary } from '../../../../theme';
const { width } = Dimensions.get('window');
const getSize = Image.getSize;
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
      <PhotoView
        loadingIndicatorSource={() => <Progress color={brand_primary}/>}
        source={{ uri: url }}
        style={this.state}
      />
    );
  }
}

export default ContentListItem;
