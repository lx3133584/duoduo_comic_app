import { connect } from 'react-redux';
import Component from './component';
import { withNavigation } from 'react-navigation';
import { getContentList, saveChapterTitle, saveContentIndex } from '../actions';
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
  saveTitle(params) {
    return dispatch(saveChapterTitle(params));
  },
  saveIndex(params) {
    return dispatch(saveContentIndex(params));
  },
})

export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component));
