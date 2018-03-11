import { connect } from 'react-redux';
import { getSearchList } from '../actions';
import Component from './component';

const mapDispatchToProps = (dispatch, ownProps) => ({
  search(params) {
    return dispatch(getSearchList(params))
  },
})

export default connect(
    null,
    mapDispatchToProps
  )(Component)