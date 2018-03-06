import { connect } from 'react-redux';
import { getSearchList } from '../actions';
import Component from './component';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.get('list'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  search (keyword) {
    return dispatch(getSearchList(keyword))
  },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
