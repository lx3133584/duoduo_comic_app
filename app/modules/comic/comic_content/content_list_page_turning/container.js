import { connect } from 'react-redux';
import Component from './component';
import { saveContentIndex } from '../actions';
import { createSelector } from 'reselect';
import { getImgHeight } from '../../../../utils';

const contentSelector = state => state['comic'].get('content');
const widthSelector = state => state['config'].get('width');

const imageUrlsSelector = createSelector(
  [contentSelector, widthSelector],
  (list, width) => list.map(item => {
    item.height = getImgHeight(item.size, width);
    item.width = width;
    return item;
  })
);

const formatContentSelector = createSelector(
  imageUrlsSelector,
  list => list.toJS()
);

const mapStateToProps = (state, ownProps) => {
  return {
    content: formatContentSelector(state),
    content_index: state['comic'].getIn(['detail', 'index']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveIndex(params) {
    return dispatch(saveContentIndex(params));
  },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
