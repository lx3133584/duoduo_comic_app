import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Modal, Dimensions } from 'react-native';
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
    this.page = page || 0;
  };
  shouldComponentUpdate(nextProps) {
    return nextProps.content !== this.props.content;
  };
  _onFetch() {
    const { onFetch } = this.props;
    if (!onFetch) return;
    const { loading } = this.state;
    if (loading) return;
    this.setState({ loading: true });
    onFetch(this.page, false).then(res => {
      this.setState({ loading: false });
      if (!res.error) {
        this.page++;
      }
    }).catch(e => {
      this.setState({ loading: false });
    });
  };
  onChange = index => {
    const { saveIndex, content, content_index, offset, onFetch } = this.props;
    if (index < content.length - 2) this._onFetch();
    if (index !== content_index - offset) saveIndex(index + offset);
  };
  render() {
    const { content, content_index, offset, toggleDrawer } = this.props;
    if (!content.length) return null;
    return (
      <ContainStyled>
        <ImageViewer
          index={content_index - offset}
          imageUrls={content}
          onChange={this.onChange}
          onClick={toggleDrawer}
          renderIndicator={() => null}/>
      </ContainStyled>
    );
  }
}

export default ContentListPageTurningComponent;
