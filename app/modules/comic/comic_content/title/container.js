import { connect } from 'react-redux';
import Component from './component';
import { withNavigation } from 'react-navigation';

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.getIn(['comic', 'chapter_title']),
    index: state.getIn(['comic', 'content_index']),
  }
}

export default withNavigation(connect(
    mapStateToProps,
    null
  )(Component));
