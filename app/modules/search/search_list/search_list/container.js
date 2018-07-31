import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { getSearchList } from '../actions';
import Component from './component';

const mapStateToProps = state => ({
  list: state.search.get('list'),
  keyword: state.search.get('keyword'),
});

const mapDispatchToProps = dispatch => ({
  search(params) {
    return dispatch(getSearchList(params));
  },
});

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component));
