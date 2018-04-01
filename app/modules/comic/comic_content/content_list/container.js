import { connect } from 'react-redux';
import Component from './component';
import { withNavigation } from 'react-navigation';
import { getContentList, preContentList, saveChapterTitle, saveContentIndex } from '../actions';
import { comicDetailActions } from '../..';
import { createSelector } from 'reselect';

const contentSelector = state => state['comic'].get('content');

const formatContentSelector = createSelector(
  contentSelector,
  list => list.toJS()
);

const mapStateToProps = (state, ownProps) => {
  return {
    comic_id: state['comic'].getIn(['detail', 'id']),
    chapter_id: state['comic'].getIn(['detail', 'chapter_id']),
    content: formatContentSelector(state),
    content_index: state['comic'].getIn(['detail', 'index']),
    pre_content: state['comic'].get('pre_content'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getList(params) {
    return dispatch(comicDetailActions.getComicList(params));
  },
  getContent(params) {
    return dispatch(getContentList(params));
  },
  preContent(params) {
    return dispatch(preContentList(params));
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
