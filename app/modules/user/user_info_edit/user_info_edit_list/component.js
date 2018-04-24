import React, { PureComponent } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Toast from 'react-native-root-toast';
// import ImagePicker from 'react-native-image-picker';
import { Avatar, ListItem } from '../..';

const ContainStyled = styled.View`
  background: #fff;
`
const itemContainStyle = {
  height: 80,
}
const inputStyle = {
  color: '#666',
}

const options = {
  title: '请选择图片',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '相机',
  chooseFromLibraryButtonTitle: '图库',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  },
};

class UserInfoEditListComponent extends PureComponent {
  static propTypes = {
    info: ImmutablePropTypes.map.isRequired,
    uploadUserAvatar: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    const { info } = props;
    const name = info.get('name');
    this.state = {
      name: name || '',
    };
    this.onChangeName = this.changFunc('name');
  };
  beforeUpload = () => {
    // ImagePicker.showImagePicker(options, res => {
    //   console.log(res);
    // })
  };
  renderAvatar = () => {
    const { info } = this.props;
    const avatar = info.get('avatar');
    return <Avatar src={avatar} medium />;
  };
  changFunc = key => value => this.setState({ [key]: value });
  render() {
    const { info } = this.props;
    const { name } = this.state;
    const username = info.get('username');
    return (
      <ContainStyled>
        <ListItem
          key="username"
          title="用户名"
          containerStyle={itemContainStyle}
          rightTitle={username}
        />
        <ListItem
          key="avatar"
          title="头像"
          containerStyle={itemContainStyle}
          rightAvatar={this.renderAvatar()}
          onPress={this.beforeUpload}
        />
        <ListItem
          key="name"
          title="昵称"
          containerStyle={itemContainStyle}
          input={{
            value: name,
            inputStyle,
            onChangeText: this.onChangeName,
          }}
        />
      </ContainStyled>
    )
  }
}

export default UserInfoEditListComponent;
