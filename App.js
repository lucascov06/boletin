
import React from 'react';
import LoginScreen from '../boletin/screens/login.jsx';

import Singin from './singin.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Singinprofesor from './screens/singin2.jsx';
import Empezar from './screens/Empezar.jsx';
import Archivo from './screens/Archivo.jsx';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Boletin Virtual">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Archivo" component={Archivo} />
      <Stack.Screen name="Singin" component={Singin} />
      <Stack.Screen name="Empezar" component={Empezar} />
      <Stack.Screen name="Singinprofesor" component={Singinprofesor} />

    </Stack.Navigator>
  </NavigationContainer>
);
};

export default App;