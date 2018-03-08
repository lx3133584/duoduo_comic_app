import { connect } from 'react-redux';
import { loginForLocal } from '../actions';
import Component from './component';
import { withNavigation } from 'react-navigation';

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginLocal(params) {
    return dispatch(loginForLocal(params))
  },
})

export default withNavigation(connect(
    null,
    mapDispatchToProps
  )(Component));
