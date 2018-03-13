import { connect } from 'react-redux';
import Component from './component';
import { withNavigation } from 'react-navigation';
import { getContentList } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    content: state.getIn(['comic', 'content']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getContent(params) {
    return dispatch(getContentList(params))
  },
})

export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component));
