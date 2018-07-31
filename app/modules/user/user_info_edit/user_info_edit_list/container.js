import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { uploadAvatar, changeUserInfo } from '../actions';
import Component from './component';

const mapStateToProps = (state, ownProps) => ({
  info: state.user.get('info'),
  csrf: state.cookies.get('csrfToken'),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  uploadUserAvatar(params) {
    return dispatch(uploadAvatar(params));
  },
  editUserInfo(params) {
    return dispatch(changeUserInfo(params));
  },
});

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component));
