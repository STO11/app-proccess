import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator<Record<string, object | undefined>>();
const Tab = createBottomTabNavigator<Record<string, object | undefined>>();

const Tabs = () => {
    return (
        <Tab.Navigator initialRouteName={Routes.HOME.name}>
            <Tab.Screen
                name={Routes.HOME.name}
                component={Routes.HOME.screen}
                options={Routes.HOME.options}
            />
            <Tab.Screen
                name={Routes.DETAILS.name}
                component={Routes.DETAILS.screen}
                options={Routes.DETAILS.options}
            />
            <Tab.Screen
                name={Routes.PROFILE.name}
                component={Routes.PROFILE.screen}
                options={Routes.PROFILE.options}
            />
        </Tab.Navigator>
    );
};

export default function Navigation(): any {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.LOGIN.name}>
                <Stack.Screen
                    name={Routes.LOGIN.name}
                    component={Routes.LOGIN.screen}
                    options={Routes.LOGIN.options}
                />
                <Stack.Screen name={Routes.TABS.name} component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
