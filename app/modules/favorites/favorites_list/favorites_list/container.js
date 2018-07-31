import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { getFavoritesList } from '../actions';
import { comicDetailActions } from '../../../comic';
import Component from './component';

const mapStateToProps = (state, ownProps) => ({
  list: state.favorites.get('favorites_list'),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getList(params) {
    return dispatch(getFavoritesList(params));
  },
  remove(params) {
    return dispatch(comicDetailActions.removeFavorite(params));
  },
});

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component));
