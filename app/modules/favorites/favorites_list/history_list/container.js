import { connect } from 'react-redux';
import { getHistoryList, removeHistory } from '../actions';
import Component from './component';
import { withNavigation } from 'react-navigation';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.getIn(['favorites', 'history_list']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getList(params) {
    return dispatch(getHistoryList(params));
  },
  remove(params) {
    return dispatch(removeHistory(params));
  }
})

export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component));
