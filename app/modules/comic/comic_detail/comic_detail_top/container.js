import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { getComicDetail } from '../actions';
import Component from './component';

const mapStateToProps = state => ({
  detail: state.comic.get('detail'),
});

const mapDispatchToProps = dispatch => ({
  getDetail(params) {
    return dispatch(getComicDetail(params));
  },
});

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component));
