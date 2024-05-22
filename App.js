import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import RootStack from './src/navigation/RootStack';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import BootSplash from "react-native-bootsplash";

const App = () => {
  LogBox.ignoreAllLogs(true)

  useEffect(() => {
    const init = async () => {
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });

  }, []);

  return (
    <Provider store={store} >
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider >
  )
}

export default App;
