import { connect } from 'react-redux';
import Component from './component';
import { saveContentIndex } from '../actions';
import { getImgHeight } from '../../../../utils';
import { createSelector } from 'reselect';

const contentSelector = state => state['comic'].get('content');
const widthSelector = state => state['config'].get('width');

const formatContentSelector = createSelector(
  contentSelector,
  list => list.toJS()
);

const imgPositonArrSelector = createSelector(
  [contentSelector, widthSelector],
  (list, width) => {
    const imgHeightArr = list.map(item => getImgHeight(item.size, width));
    return imgHeightArr.map((item, index) => imgHeightArr.slice(0, index).reduce((total, cur) => {
      return total + cur;
    }, 0))
  }
);

const mapStateToProps = (state, ownProps) => {
  return {
    content: formatContentSelector(state),
    img_positon_arr: imgPositonArrSelector(state),
    content_index: state['comic'].getIn(['detail', 'index']),
    width: widthSelector(state),
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
