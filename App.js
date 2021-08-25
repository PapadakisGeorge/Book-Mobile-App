/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar
} from 'react-native';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const App: () => React$Node = () => {

 return (
   <>
    <StatusBar barStyle="dark-content" hidden/>
    <HomeScreen username='Book Fan #1' />
    </>
  );
};



export default App;
