import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Archivo from "./screens/Archivo";
import { createStackNavigator } from '@react-navigation/stack';
// screens
import Singin from "./singin";
import Singinprofesor from "./singin2";


const Stack = createStackNavigator();

function Mytabs() {
    return (
        <Stack.Navigator>
            <tab.Screen name="Archivo" component={Archivo} />
            <tab.Screen name="Singin" component={Singin} />
            <tab.Screen name="Singinprofesor" component={Singinprofesor } />

        </Stack.Navigator>    
    );
}    

export default function navigation() {
    return (
        <NavigationContainer>
            <Mytabs />
        </NavigationContainer>
    );
}
