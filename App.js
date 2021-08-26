import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar
} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import BooksScreen from './screens/BooksScreen/BooksScreen';

const Stack = createStackNavigator();
const App: () => React$Node = () => {

 return (
   <>
    <StatusBar barStyle="dark-content" hidden/>
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='HomeScreen'
            headerMode='screen'
            >
                <Stack.Screen
                    name='HomeScreen'
                    options={{
                    headerShown:false
                    }}
                >
                {(props) => <HomeScreen {...props} username='#1 Book Fan User' />}
                </Stack.Screen>
                <Stack.Screen
                    name='BooksScreen'
                    component={BooksScreen}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitleStyle: {fontFamily: 'Ubuntu-Regular'}
                    }}
                 />

         </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};



export default App;
