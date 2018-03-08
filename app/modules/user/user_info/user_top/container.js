import { connect } from 'react-redux';
import Component from './component';
import { withNavigation } from 'react-navigation';

const mapStateToProps = (state, ownProps) => {
  return {
    info: state.getIn(['user', 'info']),
    token: state.getIn(['cookies', 'EGG_SESS']),
  }
}

export default withNavigation(connect(
    mapStateToProps,
    null
  )(Component))
