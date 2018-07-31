import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { getClassItemList } from '../actions';
import Component from './component';

const mapStateToProps = (state, ownProps) => ({
  list: state.discovery.get('class_item_list'),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getList(params) {
    return dispatch(getClassItemList(params));
  },
});

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component));
