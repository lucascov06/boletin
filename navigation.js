import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Archivo from "./screens/Archivo";
import Singin from "./singin";
import Singinprofesor from "./singin2";
import Empezar from "./screens/Empezar";
import Contraseña from "./screens/Contraseña";
import Crear from "./screens/Crear";
import HomeScreen from "./screens/Home";
import Trimestre from "./screens/TercerTrimestre";
import Materia from "./screens/Materia"; // Asegúrate de que el archivo sea correcto

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Archivo" component={Archivo} />
            <Stack.Screen name="Singin" component={Singin} />
            <Stack.Screen name="Empezar" component={Empezar} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Crear" component={Crear} />
            <Stack.Screen name="Contraseña" component={Contraseña} />
            <Stack.Screen name="Singinprofesor" component={Singinprofesor} />
            <Stack.Screen name="TercerTrimestre" component={Trimestre} />
            <Stack.Screen name="Materia" component={Materia} />
        </Stack.Navigator>    
    );
}    

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
