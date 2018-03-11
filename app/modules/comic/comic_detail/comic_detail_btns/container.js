import { connect } from 'react-redux';
import Component from './component';
import { withNavigation } from 'react-navigation';
import { addFavorite } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    detail: state.getIn(['comic', 'detail']),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  add(params) {
    return dispatch(addFavorite(params))
  },
})

export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component));
