import { connect } from 'react-redux';
import Component from './component';

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.getIn(['comic', 'chapter_title']),
    index: state.getIn(['comic', 'content_index']),
  }
}

export default connect(
    mapStateToProps,
    null
  )(Component);
