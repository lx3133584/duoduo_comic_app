import Component from './component';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

const mapStateToProps = (state, ownProps) => {
  return {
    info: state['user'].get('info'),
  }
}

export default withNavigation(connect(
    mapStateToProps,
    null
  )(Component));
