import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {Tabs} from './tabs';

const Stack = createStackNavigator<Record<string, object | undefined>>();

export default function Navigation(): any {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.LOGIN.name}>
                <Stack.Screen
                    name={Routes.LOGIN.name}
                    component={Routes.LOGIN.screen}
                    options={Routes.LOGIN.options}
                />
                <Stack.Screen
                    name={Routes.DETAILS.name}
                    component={Routes.DETAILS.screen}
                    options={Routes.DETAILS.options}
                />
                <Stack.Screen name={Routes.TABS.name} component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
