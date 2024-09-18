import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// screens
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";


const Tab = createBottomTabNavigator();

function Mytabs() {
    return (
        <tab.Navigator>
            <tab.Screen name="Home" component={HomeScreen} />
            <tab.Screen name="Setting" component={SettingScreen} />
        </tab.Navigator>    
    );
}    

export default function navigation() {
    return (
        <NavigationContainer>
            <Mytabs />
        </NavigationContainer>
    );
}
