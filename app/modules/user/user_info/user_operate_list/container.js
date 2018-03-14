import Component from './component';
import { withNavigation } from 'react-navigation';
import { logoutAction } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    info: state.getIn(['user', 'info']),
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
