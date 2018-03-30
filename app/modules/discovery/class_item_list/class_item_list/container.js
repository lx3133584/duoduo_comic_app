import { connect } from 'react-redux';
import { getClassItemList } from '../actions';
import Component from './component';
import { withNavigation } from 'react-navigation';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state['discovery'].get('class_item_list'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getList(params) {
    return dispatch(getClassItemList(params));
  },
})

export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component));
