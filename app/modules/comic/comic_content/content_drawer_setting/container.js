import { connect } from 'react-redux';
import Component from './component';

const mapStateToProps = (state, ownProps) => {
  return {
    orientation: state['config'].get('orientation'),
  }
}

export default connect(
    mapStateToProps,
    null
)(Component);
