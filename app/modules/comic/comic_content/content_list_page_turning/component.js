import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Dimensions } from 'react-native';
import { ImgPlaceholder, ContentListFooter } from '..';
import styled from "styled-components";
const { width, height } = Dimensions.get('window');
const ContainStyled = styled.View`
  width: ${width};
  height: ${height};
`

class ContentListPageTurningComponent extends Component {
  static propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      height: PropTypes.number,
      width: PropTypes.number,
    })).isRequired,
    content_index: PropTypes.number,
    width: PropTypes.number.isRequired,
    saveIndex: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    onFetch: PropTypes.func.isRequired,
    increasePage: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      showFooter: false,
    };
    this.loading = false;
  };
  shouldComponentUpdate(nextProps) {
    return (nextProps.content !== this.props.content) || (nextProps.content_index !== this.props.content_index);
  };
  _onFetch() {
    const { onFetch, increasePage, page } = this.props;
    if (!onFetch) return;
    this.loading = true;
    onFetch(page).then(res => {
      this.loading = false;
      if (!res.error && res.value.result.data.length) {
        increasePage();
      }
    }).catch(e => {
      this.loading = false;
    });
  };
  onChange = index => {
    const { saveIndex, content, content_index, offset } = this.props;
    const len = content.length;
    if (index > len - 3) {
      if (!this.loading) this._onFetch();
    };
    this.setState({ showFooter: len - 1 === index });
    if (index !== content_index - offset) saveIndex(index + offset);
  };
  renderLoading = () => (<ImgPlaceholder style={{ width, height }}>loading</ImgPlaceholder>);
  renderFooter = () => {
    const { showFooter } = this.state;
    if (!showFooter) return null;
    return <ContentListFooter />;
  };
  render() {
    const { content, content_index, offset, width, toggleDrawer } = this.props;
    if (!content.length) return null;
    return (
      <ContainStyled>
        <ImageViewer
          index={content_index - offset}
          imageUrls={content}
          onChange={this.onChange}
          failImageSource={require('./fail.jpg')}
          loadingRender={this.renderLoading}
          renderFooter={this.renderFooter}
          onClick={toggleDrawer}
          flipThreshold={60}
          maxOverflow={width}
          renderIndicator={() => null}/>
      </ContainStyled>
    );
  }
}

export default ContentListPageTurningComponent;