/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Catagories from "./components/Catagories";
import NewsScreen from "./components/NewsScreen";
import NewsWeb from "./components/NewsWeb";
import Splash from './components/Splash';

const Stack = createStackNavigator();

const App= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="Catagories" component={Catagories} options={{ title: 'Select Catagories',headerStyle: {
          backgroundColor: '#353',
          }, headerTintColor: '#fff', }}/>
        <Stack.Screen name="NewsScreen" component={NewsScreen} options={{ title: 'News Feed',headerStyle: {
          backgroundColor: '#353',
          }, headerTintColor: '#fff', }}/>
        <Stack.Screen name="NewsWeb" component={NewsWeb} options={{ title: 'Detail News',headerStyle: {
          backgroundColor: '#f4511e',
          }, headerTintColor: '#fff',}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
