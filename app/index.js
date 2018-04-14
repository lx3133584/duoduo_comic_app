import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import store, { persistor } from './store';
import './api/config';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import Orientation from 'react-native-orientation';

class App extends React.Component {
    componentDidMount() {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000)
      Orientation.lockToPortrait(); // 锁定竖屏
      if (process.env.NODE_ENV !== 'production') persistor.purge(); // 开发模式下清除persist
    }
    render() {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation />
          </PersistGate>
        </Provider>
      )
    }
}

export default App;
