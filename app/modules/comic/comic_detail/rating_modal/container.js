import { connect } from 'react-redux';
import Component from './component';
import { addScore } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    id: state.getIn(['comic', 'detail', 'id']),
    my_score: state.getIn(['comic', 'detail', 'my_score']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  add(params) {
    return dispatch(addScore(params))
  },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
