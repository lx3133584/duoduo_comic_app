import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import Component from './component';

const mapStateToProps = state => ({
  title: state.comic.getIn(['detail', 'title']),
});

export default withNavigation(connect(
  mapStateToProps,
  null,
)(Component));
