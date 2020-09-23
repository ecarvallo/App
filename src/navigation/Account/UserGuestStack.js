import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Account/Login';
import Register from "../../screens/Account/Register";

const Stack = createStackNavigator();

export default function UserGuestStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="login"
                    component={Login}
                    options={{ title: "Inicio Sesión" }}
                />
                <Stack.Screen 
                    name="register"
                    component={Register}
                    options={{ title: "Registro Usuario" }}
                />
            </Stack.Navigator>
        </NavigationContainer>  
    )
}
