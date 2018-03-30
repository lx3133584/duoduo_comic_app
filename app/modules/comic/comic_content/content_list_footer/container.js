import { connect } from 'react-redux';
import Component from './component';
import { withNavigation } from 'react-navigation';

const mapStateToProps = (state, ownProps) => {
  return {
    chapter_id: state.getIn(['comic', 'detail', 'chapter_id']),
    list: state.getIn(['comic', 'list']),
  }
}

export default withNavigation(connect(
    mapStateToProps,
    null
  )(Component));
