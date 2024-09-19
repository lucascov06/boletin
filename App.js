import React from 'react';
import LoginScreen from '../boletin/screens/Login.jsx';
import Archivo from './screens/Archivo.jsx';
import Singin from './singin.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Singinprofesor from './singin2.jsx';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Boletin Virtual">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Archivo" component={Archivo} />
      <Stack.Screen name="Singin" component={Singin} />
      <Stack.Screen name="Singinprofesor" component={Singinprofesor} />

    </Stack.Navigator>
  </NavigationContainer>
);
};

export default App;

