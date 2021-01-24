import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {Platform} from 'react-native';
import {colors} from '../styles/colors';
import IconFeather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Routes} from './routes';
//
// ─── FOR TABBAR SETTINGS AND STYLES ─────────────────────────────────────────────
//
const Tab = createBottomTabNavigator<Record<string, object | undefined>>();
export const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName={Routes.HOME.name}
            //Config for option tabbar and style
            tabBarOptions={{
                showLabel: true,
                style: {
                    backgroundColor: colors.backgroundTabColor,
                },
                activeTintColor: colors.primaryColor,
                inactiveTintColor: colors.backgroundColor,
                tabStyle: {
                    //marginTop: Platform.OS === 'ios' ? 0 : 0,
                    //height: 40,
                    flexDirection: 'row-reverse',
                    backgroundColor: colors.backgroundTabColor,
                },
                labelStyle: {
                    fontSize: 14,
                    paddingRight: '15%',
                    letterSpacing: 3,
                    fontWeight: '500',
                },
                labelPosition: 'beside-icon',
            }}
            //Config for Tab Icon
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = 'folder';
                            break;
                        case 'Profile':
                            iconName = 'account-outline';
                            break;
                        default:
                            iconName = 'circle';
                            break;
                    }

                    return route.name === 'Home' ? (
                        <IconFeather
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    ) : (
                        <MaterialCommunityIcons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}>
            {/* Screen for tabs route */}
            <Tab.Screen
                name={Routes.HOME.name}
                component={Routes.HOME.screen}
                options={Routes.HOME.options}
            />
            <Tab.Screen
                name={Routes.PROFILE.name}
                component={Routes.PROFILE.screen}
                options={Routes.PROFILE.options}
            />
        </Tab.Navigator>
    );
};
