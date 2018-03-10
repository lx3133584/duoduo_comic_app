import { connect } from 'react-redux';
import { getComicDetail } from '../actions';
import Component from './component';
import { withNavigation } from 'react-navigation';

const mapStateToProps = (state, ownProps) => {
  return {
    detail: state.getIn(['comic', 'detail']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getDetail(params) {
    return dispatch(getComicDetail(params))
  },
})

export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component));
