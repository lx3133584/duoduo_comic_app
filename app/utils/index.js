import React, { PureComponent } from 'react'
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
  return class NewComponent extends PureComponent {
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

  return NewComponent;
}
