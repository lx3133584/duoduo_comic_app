import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { getRankItemList } from '../actions';
import Component from './component';

const mapStateToProps = state => ({
  list: state.discovery.get('rank_item_list'),
});

const mapDispatchToProps = dispatch => ({
  getList(params) {
    return dispatch(getRankItemList(params));
  },
});

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component));
