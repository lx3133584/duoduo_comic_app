import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import Component from './component';

const mapStateToProps = state => ({
  title: state.comic.get('chapter_title'),
});

export default withNavigation(connect(
  mapStateToProps,
  null,
)(Component));
