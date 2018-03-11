import Component from './component';
import { withNavigation } from 'react-navigation';
import { logoutAction } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.getIn(['cookies', 'EGG_SESS']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout() {
    return dispatch(logoutAction())
  },
})

export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component));