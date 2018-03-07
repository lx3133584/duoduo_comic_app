import { connect } from 'react-redux';
import { getSearchList } from '../actions';
import Component from './component';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.getIn(['search', 'list']),
    keyword: state.getIn(['search', 'keyword']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  search(params) {
    return dispatch(getSearchList(params))
  },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
