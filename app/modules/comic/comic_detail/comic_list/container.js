import { connect } from 'react-redux';
import Component from './component';
import { withNavigation } from 'react-navigation';
import { getComicList } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.getIn(['comic', 'list']),
    chapter_id: state.getIn(['comic', 'detail', 'chapter_id']),
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
