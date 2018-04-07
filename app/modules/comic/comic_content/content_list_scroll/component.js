import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { LongList } from '../../..';
import { ContentListItem, ContentListFooter } from '..';
import { getImgHeight } from '../../../../utils';

class ContentListScrollComponent extends Component {
  static propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      index: PropTypes.number,
      size: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
      }),
    })).isRequired,
    img_positon_arr: ImmutablePropTypes.list.isRequired,
    content_index: PropTypes.number,
    saveIndex: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    const { getRef } = props;
    getRef(this);
  };
  shouldComponentUpdate(nextProps) {
    return nextProps.content !== this.props.content;
  };
  scrollTo = (index = 0) => {
    this.content_ref && this.content_ref.scrollToIndex({
      viewPosition: 0,
      index,
      animated: false,
      viewOffset: false,
    });
  };
  onScroll = (e) => {
    const { saveIndex, content, content_index, img_positon_arr, offset } = this.props;
    const scrollY = e.nativeEvent.contentOffset.y;
    let index = 0;
    for (let len = img_positon_arr.size, i = len - 1; i >= 0; i--) {
      if (scrollY > img_positon_arr.get(i)) {
        index = i;
        break;
      }
    }
    if (index !== content_index - offset) saveIndex(index + offset);
  };
  _getItemLayout = (data, index) => {
    const { img_positon_arr } = this.props;
    const item = data[index];
    const length = getImgHeight(item.size);
    const offset = img_positon_arr.get(index);
    return { length, offset, index };
  };
  _getRef = ref => this.content_ref = ref;
  render() {
    const { content, page, onRefresh, onFetch } = this.props;
    return (
      <LongList
         getRef={this._getRef}
         list={content}
         Item={ContentListItem}
         customkey="index"
         onFetch={onFetch}
         onScroll={this.onScroll}
         ListFooterComponent={ContentListFooter}
         getItemLayout={this._getItemLayout}
         initialNumToRender={3}
         page={page + 1}
         callback={onRefresh}
         isLong
       />
    );
  }
}

export default ContentListScrollComponent;
