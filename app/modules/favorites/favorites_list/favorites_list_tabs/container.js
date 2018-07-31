import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import Component from './component';

const mapStateToProps = (state, ownProps) => ({
  info: state.user.get('info'),
});

export default withNavigation(connect(
  mapStateToProps,
  null,
)(Component));
