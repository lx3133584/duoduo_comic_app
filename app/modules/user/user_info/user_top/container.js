import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import Component from './component';
import { getUserInfo } from '../actions';

const mapStateToProps = state => ({
  info: state.user.get('info'),
});

const mapDispatchToProps = dispatch => ({
  getUser() {
    return dispatch(getUserInfo());
  },
});


export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component));
