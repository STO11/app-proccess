import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {Tabs} from './tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableHighlight} from 'react-native';
import {colors} from '../styles/colors';

const Stack = createStackNavigator<Record<string, object | undefined>>();

export interface Props {
    navigation?: any;
    icon?: Icon;
}

const Left = ({onPress}: any) => (
    <TouchableHighlight onPress={onPress}>
        <Icon name={'long-arrow-left'} size={30} color={colors.primaryColor} />
    </TouchableHighlight>
);

export const Navigation: React.FC<Props> = ({navigation}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={Routes.LOGIN.name}
                screenOptions={{
                    headerBackTitleVisible: false,
                    headerBackImage: () => (
                        <Left onPress={() => navigation.back()} />
                    ),
                }}>
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
};
