import { connect } from 'react-redux';
import Component from './component';
import { withNavigation } from 'react-navigation';
import { getUserInfo } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    info: state['user'].get('info'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getUser() {
    return dispatch(getUserInfo())
  },
})


export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component))
