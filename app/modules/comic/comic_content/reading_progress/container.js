import { connect } from 'react-redux';
import Component from './component';

const mapStateToProps = (state, ownProps) => {
  return {
    index: state['comic'].get('content_index') + 1,
    total: state['comic'].get('content_total'),
  }
}

export default connect(
    mapStateToProps,
    null
  )(Component);
