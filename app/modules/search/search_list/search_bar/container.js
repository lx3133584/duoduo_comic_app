import { connect } from 'react-redux';
import { getSearchList } from '../actions';
import Component from './component';

const mapStateToProps = (state, ownProps) => ({
  keyword: state.search.get('keyword'),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  search(params) {
    return dispatch(getSearchList(params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
