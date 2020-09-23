import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Treatment from '../screens/Treatment/Treatment';


const Stack = createStackNavigator();

export default function TreatmentsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="account"
                component={Treatment}
                options={{ title: "Tratamientos" }}
            />
        </Stack.Navigator>
    )
}
