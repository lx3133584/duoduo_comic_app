import React, { PureComponent } from 'react';
import { NetInfo } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const ICON_SIZE = 12;
const ICON_COLOR = '#fff';

const WifiIcon = ({ name }) => <Feather name={name} size={ICON_SIZE} color={ICON_COLOR} />;

class NetStatusComponent extends PureComponent {
  constructor() {
    super();
    this.getNetStatus = this.getNetStatus.bind(this);
  }

  state = {
    net: 'wifi',
  };

  getNetStatus({ type }) {
    if (type === 'wifi') {
      this.setState({ net: type });
    } else if (type === 'none') {
      this.setState({ net: 'wifi-off' });
    } else {
      this.setState({ net: 'bar-chart' });
    }
  }

  componentDidMount() {
    NetInfo.getConnectionInfo().then(this.getNetStatus);
    NetInfo.addEventListener('connectionChange', this.getNetStatus);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.getNetStatus);
  }

  render() {
    const { net } = this.state;
    return <WifiIcon name={net} />;
  }
}

export default NetStatusComponent;
