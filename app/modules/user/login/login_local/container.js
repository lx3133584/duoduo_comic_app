import { connect } from 'react-redux';
import { loginForLocal } from '../actions';
import { favoritesListActions } from '../../..';
import Component from './component';
import { withNavigation } from 'react-navigation';

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginLocal(params) {
    return dispatch(loginForLocal(params))
  },
  getFavorites(params) {
    return dispatch(favoritesListActions.getFavoritesList(params))
  },
  getHistory(params) {
    return dispatch(favoritesListActions.getHistoryList(params));
  },
})

export default withNavigation(connect(
    null,
    mapDispatchToProps
  )(Component));
