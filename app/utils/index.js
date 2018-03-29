import React, { PureComponent } from 'react';
import {
  Platform,
  View,
  Linking,
} from 'react-native';
import {
  isFirstTime,
  markSuccess,
  checkUpdate,
  downloadUpdate,
  switchVersion,
  switchVersionLater,
} from 'react-native-update';
import { Modal } from '../modules';
import _updateConfig from '../../update.json';
const {appKey} = _updateConfig[Platform.OS];

// 大数字格式化
export const numberFormat = function(num) {
  const n = +num || 0;
  switch (true) {
    case n < 10000:
      return n;
    case n >= 100000000:
      return (n / 100000000).toFixed(1) + '亿';
    case n >= 10000:
      return (n / 10000).toFixed(1) + '万';
    default:
      return n;
  }
}
// 提供loading状态的高阶组件
export const wrapWithLoading = function(WrappedComponent) {
  class NewComponent extends PureComponent {
    constructor() {
      super();
      this.state = {
        loading: true,
      };
      this.hideLoading = this.hideLoading.bind(this);
    }

    hideLoading(bool = false) {
      this.setState({ loading: bool });
    }

    render() {
      const { loading } = this.state;
      return <WrappedComponent {...this.props} loading={loading} hideLoading={this.hideLoading} />;
    }
  }
  NewComponent.navigationOptions = WrappedComponent.navigationOptions;
  return NewComponent;
}
// 提供热更新功能的高阶组件
export const wrapWithUpdate = function(WrappedComponent) {
  class NewComponent extends PureComponent {
    constructor() {
      super();
      this.type = 'download'; // 当前状态类型
      this.info = null; // 更新信息
      this.hash = null; // 安装包hash值
    }

    componentWillMount(){
      if (isFirstTime) markSuccess(); // 确认更新成功, 有报错则回滚版本
    }

    state = {
      tips: '您的应用版本已更新，请前往应用商店下载新的版本',
      isVisible: false,
    };

    checkUpdate = () => {
      return checkUpdate(appKey).then(info => {
        if (info.expired) {
          this.setState({
            isVisible: true,
            tips: '您的应用版本已更新，请前往应用商店下载新的版本',
          });
          this.type = 'download';
          this.info = info;
          return true;
        } else if (info.upToDate) {
          return false;
        } else {
          this.setState({
            isVisible: true,
            tips: `检查到新的版本${info.name}，是否下载更新？\n${info.description}`,
          });
          this.type = 'doUpdate'
          this.info = info;
          return true;
        }
      });
    };
    doUpdate = info => {
      downloadUpdate(info).then(hash => {
        this.setState({
          isVisible: true,
          tips: '下载更新完成，是否重启应用？',
        });
        this.type = 'switchVersion'
        this.hash = hash;
      });
    };
    download = info => {
      info.downloadUrl && Linking.openURL(info.downloadUrl);
    };
    confirm = () => {
      const { type } = this.state;
      this.setState({ isVisible: false });
      if (type === 'doUpdate') this.doUpdate(this.info);
      if (type === 'download') this.download(this.info);
      if (type === 'switchVersion') switchVersion(this.hash);
    };
    cancel = () => {
      const { type } = this.state;
      this.setState({ isVisible: false });
      if (type === 'switchVersion') switchVersionLater(this.hash);
    };

    render() {
      const { tips, isVisible } = this.state;
      return ([
          <WrappedComponent key="wrapped" {...this.props} checkUpdate={this.checkUpdate} />,
          <Modal
            key="modal"
            confirm={this.confirm}
            cancel={this.cancel}
            isVisible={isVisible}>
            {tips}
          </Modal>
      ]);
    }
  }

  NewComponent.navigationOptions = WrappedComponent.navigationOptions;
  return NewComponent;
}
