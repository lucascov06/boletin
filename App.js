import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importación de pantallas
import LoginScreen from '../boletin/screens/login.jsx';
import Singinprofesor from './screens/singin2.jsx';
import Empezar from './screens/Empezar.jsx';
import Archivo from './screens/Archivo.jsx';
import Contraseña from './screens/Contraseña.jsx';
import Crear from './screens/Crear.jsx';
import HomeScreen from './screens/Home.jsx';
import Perfil from './screens/Perfil.jsx';
import TercerTrimestre from './screens/TercerTrimestre.jsx';
import Materia from './screens/Materia.jsx'; 
import EmpezarProf from './screens/EmpezarProf.jsx'; 
import HomeProf from './screens/HomeProf.jsx'; 


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Archivo" component={Archivo} />
        <Stack.Screen name="Crear" component={Crear} />
        <Stack.Screen name="Contraseña" component={Contraseña} />
        <Stack.Screen name="Empezar" component={Empezar} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Singinprofesor" component={Singinprofesor} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="TercerTrimestre" component={TercerTrimestre} />
        <Stack.Screen name="Materia" component={Materia} />
        <Stack.Screen name="EmpezarProf" component={EmpezarProf} />
        <Stack.Screen name="HomeProf" component={HomeProf} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
