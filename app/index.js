import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import store, { persistor } from './store';
import './api/config';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';

class App extends React.Component {
    componentDidMount() {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000)
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
