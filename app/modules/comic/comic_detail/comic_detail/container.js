import { connect } from 'react-redux';
import Component from './component';

const mapStateToProps = (state, ownProps) => {
  return {
    detail: state['comic'].get('detail'),
  }
}

export default connect(
    mapStateToProps,
    null
  )(Component);
