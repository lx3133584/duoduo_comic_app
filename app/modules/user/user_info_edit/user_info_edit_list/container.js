import { connect } from 'react-redux';
import { uploadAvatar } from '../actions';
import Component from './component';

const mapStateToProps = (state, ownProps) => {
  return {
    info: state['user'].get('info'),
    csrf: state['cookies'].get('csrfToken'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  uploadUserAvatar(params) {
    return dispatch(uploadAvatar(params))
  },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
