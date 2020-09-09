/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {Provider} from 'react-redux';

import RootStackScreen from './screens/RootStackScreen';

import store from './store/index';

import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);
  const [isFirst, setIsFirst] = React.useState(false);

  useEffect(() => {
    getAuth();
    getFirstTimeLogin();
  }, [isFirst]);

  const getFirstTimeLogin = async () => {
    const result = await AsyncStorage.getItem('first_user');
    if (result !== null) {
      setIsFirst(result);
    }
  };

  const getAuth = async () => {
    const result = await AsyncStorage.getItem('USERS');
    if (result !== null) {
      setUser(result);
    }
  };

  console.log('user', user);
  console.log('first', isFirst);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    },
  };

  // theme
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer theme={theme}>
          <RootStackScreen />
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
};

export default App;
