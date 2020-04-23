/**
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import store from './store';

import HomePage from './pages/home';
import ProfilePage from './pages/profile';
import WelcomePage from './pages/welcome';

const Tab = createBottomTabNavigator();

const ErgateTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 5 * 1000);
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer theme={ErgateTheme}>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Profile" component={ProfilePage} />
            <Tab.Screen name="Welcome" component={WelcomePage} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
