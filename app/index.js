import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import store from './store';
import './api/config';
import SplashScreen from 'react-native-splash-screen';

class App extends React.Component {
    componentDidMount() {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000)
    }
    render() {
      return (
        <Provider store={store}>
          <Navigation />
        </Provider>
      )
    }
}

export default App;
