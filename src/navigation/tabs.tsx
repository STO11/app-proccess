/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {Platform} from 'react-native';
import {colors} from '../styles/colors';
import IconFeather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Routes} from './routes';
import {createStackNavigator} from '@react-navigation/stack';
import homeScreen from '../screens/home/HomeScreen';
import detailsScreen from '../screens/details/DetailsScreen';
import {TouchableHighlight} from 'react-native';
import IconAttach from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//
// ─── FOR TABBAR SETTINGS AND STYLES ─────────────────────────────────────────────
//
const Tab = createBottomTabNavigator<Record<string, object | undefined>>();

const Stack = createStackNavigator<Record<string, object | undefined>>();

const Left = ({onPress}: any) => (
    <TouchableHighlight onPress={onPress} style={{paddingLeft: 20}}>
        <Icon
            name={'keyboard-backspace'}
            size={25}
            color={colors.primaryColor}
        />
    </TouchableHighlight>
);

const Attach = ({onPress}: any) => (
    <TouchableHighlight onPress={onPress} style={{paddingRight: 20}}>
        <IconAttach name={'attach'} size={30} color={colors.primaryColor} />
    </TouchableHighlight>
);

export const StackHome = ({navigation}: any) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerBackImage: () => (
                    <Left onPress={() => navigation.back()} />
                ),
                headerTitleAlign: 'left',
                headerRight: () => <Attach />,
                animationEnabled: false,
            }}>
            <Stack.Screen
                name="Home"
                component={homeScreen}
                options={Routes.HOME.options}
            />
            <Stack.Screen
                name={Routes.DETAILS.name}
                component={detailsScreen}
            />
        </Stack.Navigator>
    );
};

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
                component={StackHome}
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
