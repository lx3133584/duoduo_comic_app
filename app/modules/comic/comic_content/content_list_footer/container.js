import { connect } from 'react-redux';
import Component from './component';
import { getContentList } from '../actions';
import { createSelector } from 'reselect';

const listSelector = state => state['comic'].get('list');
const chapterIdSelector = state => state['comic'].getIn(['detail', 'chapter_id']);
const chaptersSelector = createSelector(
  listSelector,
  list => {
    let chapters = [];
    list.forEach(({ data }) => {
      chapters = chapters.concat(data);
    })
    return chapters;
  }
)
const indexSelector = createSelector(
  [chaptersSelector, chapterIdSelector],
  (chapters, id) => {
    let cur_index = 0;
    chapters.forEach((item, index) => {
      if (item.id === id) cur_index = index;
    })
    return cur_index;
  }
);
const nextItemSelector = createSelector(
  [chaptersSelector, indexSelector],
  (chapters, index) => {
    if (index === chapters.length - 1) return false;
    return chapters[index + 1];
  }
);

const mapStateToProps = (state, ownProps) => {
  return {
    next: nextItemSelector(state),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getList(params) {
    return dispatch(getContentList(params))
  },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
