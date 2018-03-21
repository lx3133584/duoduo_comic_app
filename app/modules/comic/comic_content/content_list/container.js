import { connect } from 'react-redux';
import Component from './component';
import { withNavigation } from 'react-navigation';
import { getContentList, getContentIndex } from '../actions';
import { comicDetailActions } from '../..';

const mapStateToProps = (state, ownProps) => {
  return {
    comic_id: state.getIn(['comic', 'detail', 'id']),
    content: state.getIn(['comic', 'content']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getList(params) {
    return dispatch(comicDetailActions.getComicList(params));
  },
  getContent(params) {
    return dispatch(getContentList(params));
  },
  getIndex(params) {
    return dispatch(getContentIndex(params));
  },
})

export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component));
