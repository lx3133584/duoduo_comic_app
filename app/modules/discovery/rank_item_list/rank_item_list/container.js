import { connect } from 'react-redux';
import { getRankItemList } from '../actions';
import Component from './component';
import { withNavigation } from 'react-navigation';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state['discovery'].get('rank_item_list'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getList(params) {
    return dispatch(getRankItemList(params));
  },
})

export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component));
