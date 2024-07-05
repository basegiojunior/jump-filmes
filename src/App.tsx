/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';

import MainRoutes from './routes/Routes';
import store from './store';
import { colors } from './styles/colors';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.background}
      />
      <MainRoutes />
    </Provider>
  );
};

export default App;
