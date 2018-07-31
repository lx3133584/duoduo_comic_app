import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { getHistoryList, removeHistory } from '../actions';
import Component from './component';

const mapStateToProps = (state, ownProps) => ({
  list: state.favorites.get('history_list'),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getList(params) {
    return dispatch(getHistoryList(params));
  },
  remove(params) {
    return dispatch(removeHistory(params));
  },
});

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component));
