import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { getClassList } from '../actions';
import Component from './component';

const mapStateToProps = state => ({
  list: state.discovery.get('class_list'),
});

const mapDispatchToProps = dispatch => ({
  getList(params) {
    return dispatch(getClassList(params));
  },
});

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component));
