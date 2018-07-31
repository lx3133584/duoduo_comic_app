import { connect } from 'react-redux';
import Component from './component';
import { configActions } from '../../..';

const mapStateToProps = (state, ownProps) => ({
  brightness: state.config.get('brightness'),
  width: state.config.get('width'),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  switchBrightness(params) {
    return dispatch(configActions.switchBrightness(params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
