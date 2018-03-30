import { connect } from 'react-redux';
import Component from './component';
import { withNavigation } from 'react-navigation';
import { getContentList } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    chapter_id: state.getIn(['comic', 'detail', 'chapter_id']),
    list: state.getIn(['comic', 'list']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getList(params) {
    return dispatch(getContentList(params))
  },
})

export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component));
