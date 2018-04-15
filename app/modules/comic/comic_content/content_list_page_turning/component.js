import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Modal, Dimensions, Image } from 'react-native';
import { ImgPlaceholder } from '..';
import { ContentListItem, ContentListFooter } from '..';
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
    saveIndex: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    onFetch: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    const { page } = props;
    this.state = {
      loading: false,
    };
    this.page = page;
  };
  shouldComponentUpdate(nextProps) {
    return (nextProps.content !== this.props.content) || (nextProps.content_index !== this.props.content_index);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) this.page = nextProps.page;
  };
  _onFetch() {
    const { onFetch } = this.props;
    if (!onFetch) return;
    const { loading } = this.state;
    if (loading) return;
    this.setState({ loading: true });
    onFetch(this.page).then(res => {
      this.setState({ loading: false });
      if (!res.error) {
        this.page++;
      }
    }).catch(e => {
      this.setState({ loading: false });
    });
  };
  onChange = index => {
    const { saveIndex, content, content_index, offset } = this.props;
    if (index > content.length - 3) this._onFetch();
    if (index !== content_index - offset) saveIndex(index + offset);
  };
  _renderLoading = () => <ImgPlaceholder style={{ width, height }}>loading</ImgPlaceholder>;
  render() {
    const { content, content_index, offset, toggleDrawer } = this.props;
    if (!content.length) return null;
    return (
      <ContainStyled>
        <ImageViewer
          index={content_index - offset}
          imageUrls={content}
          onChange={this.onChange}
          failImageSource={require('./fail.jpg')}
          loadingRender={this._renderLoading}
          onClick={toggleDrawer}
          renderIndicator={() => null}/>
      </ContainStyled>
    );
  }
}

export default ContentListPageTurningComponent;
