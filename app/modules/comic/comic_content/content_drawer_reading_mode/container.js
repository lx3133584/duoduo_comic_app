import { connect } from 'react-redux';
import Component from './component';
import { configActions } from '../../..';

const mapStateToProps = (state, ownProps) => {
  return {
    mode: state['config'].get('mode'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  switchReadingMode(params) {
    return dispatch(configActions.switchReadingMode(params));
  },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
