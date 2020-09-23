import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import HomeStack from './HomeStack';
import LocationStack from './LocationStack';
import TreatmentsStack from './TreatmentsStack';
import AccountStack from './AccountStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="home"
                screenOptions={({route}) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                })}
            >
                <Tab.Screen 
                    name="home"
                    component={HomeStack}
                    options={{title: "Pagina Principal"}}
                />
                <Tab.Screen 
                    name="location"
                    component={LocationStack}
                    options={{title: "Ubicaciones"}}
                />
                <Tab.Screen 
                    name="treatments"
                    component={TreatmentsStack}
                    options={{title: "Tratamientos"}}
                />
                <Tab.Screen 
                    name="account"
                    component={AccountStack}
                    options={{title: "Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color){
    let iconName;

    switch (route.name) {
        case "home":
            iconName = "home";
            break;
        case "location":
            iconName = "map-marker";
            break;
        case "treatments":
            iconName = "hospital-box";
            break;
        case "account":
            iconName = "account";
            break;
        default:
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    )

}