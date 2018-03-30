import { connect } from 'react-redux';
import { getSearchList } from '../actions';
import Component from './component';
import { withNavigation } from 'react-navigation';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state['search'].get('list'),
    keyword: state['search'].get('keyword'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  search(params) {
    return dispatch(getSearchList(params))
  },
})

export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component));
