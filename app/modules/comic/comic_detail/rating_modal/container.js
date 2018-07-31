import { connect } from 'react-redux';
import Component from './component';
import { addScore } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  id: state.comic.getIn(['detail', 'id']),
  my_score: state.comic.getIn(['detail', 'my_score']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  add(params) {
    return dispatch(addScore(params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
