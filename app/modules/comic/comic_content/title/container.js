import { connect } from 'react-redux';
import Component from './component';

const mapStateToProps = (state, ownProps) => {
  return {
    title: state['comic'].get('chapter_title'),
    index: state['comic'].get('content_index'),
  }
}

export default connect(
    mapStateToProps,
    null
  )(Component);
