import { connect } from 'react-redux';
import Component from './component';
import { addFavorite, removeFavorite } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    score: state.getIn(['comic', 'detail', 'score']),
    score_number: state.getIn(['comic', 'detail', 'score_number']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  add(params) {
    return dispatch(addFavorite(params))
  },
  remove(params) {
    return dispatch(removeFavorite(params))
  },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
