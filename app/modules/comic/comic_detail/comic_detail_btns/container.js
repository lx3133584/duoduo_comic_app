import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import Component from './component';
import { addFavorite, removeFavorite } from '../actions';

const mapStateToProps = state => ({
  detail: state.comic.get('detail'),
  list: state.comic.get('list'),
});

const mapDispatchToProps = dispatch => ({
  add(params) {
    return dispatch(addFavorite(params));
  },
  remove(params) {
    return dispatch(removeFavorite(params));
  },
});

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component));
