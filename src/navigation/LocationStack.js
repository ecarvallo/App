import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Location from '../screens/Location/Location';
import CurrentLocation from '../screens/Location/CurrentLocation';
import SafeArea from '../screens/Location/SafeArea';
import HistLocation from '../screens/Location/HistLocation';

const Stack = createStackNavigator();

export default function LocationStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="location"
                component={Location}
                options={{ title: "Ubicaciones" }}
            />
            <Stack.Screen 
                name="currentLocation"
                component={CurrentLocation}
                options={{ title: "Ubicación Actual" }}
            />
            <Stack.Screen 
                name="safeArea"
                component={SafeArea}
                options={{ title: "Determinar Área Segura" }}
            />
            <Stack.Screen 
                name="histLocation"
                component={HistLocation}
                options={{ title: "Historial de Ubicaciones" }}
            />
        </Stack.Navigator>
    )
}
