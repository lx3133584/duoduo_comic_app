import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { editPassword } from '../actions';
import Component from './component';

const mapDispatchToProps = (dispatch, ownProps) => ({
  changePassword(params) {
    return dispatch(editPassword(params));
  },
});

export default withNavigation(connect(
  null,
  mapDispatchToProps,
)(Component));
