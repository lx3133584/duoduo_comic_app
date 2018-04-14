import { connect } from 'react-redux';
import Component from './component';
import { configActions } from '../../..';

const mapStateToProps = (state, ownProps) => {
  return {
    orientation: state['config'].get('orientation'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  switchOrientation(params) {
    return dispatch(configActions.switchOrientation(params));
  },
  changeWidth(params) {
    return dispatch(configActions.changeWidth(params));
  },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
