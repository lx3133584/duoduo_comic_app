import { connect } from 'react-redux';
import Component from './component';
import { withNavigation } from 'react-navigation';

const mapStateToProps = (state, ownProps) => {
  return {
    title: state['comic'].get('chapter_title'),
  }
}

export default withNavigation(connect(
    mapStateToProps,
    null
  )(Component));
