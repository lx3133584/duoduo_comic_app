import { connect } from 'react-redux';
import Component from './component';
import { withNavigation } from 'react-navigation';
import { getComicList } from '../actions';
import { createSelector } from 'reselect';

const listSelector = state => state['comic'].get('list');

const formatListSelector = createSelector(
  listSelector,
  list => list.toJS()
);

const mapStateToProps = (state, ownProps) => {
  return {
    list: formatListSelector(state),
    chapter_id: state['comic'].getIn(['detail', 'chapter_id']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getList(params) {
    return dispatch(getComicList(params))
  },
})

export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component));
