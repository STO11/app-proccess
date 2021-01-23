import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {Tabs} from './tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAttach from 'react-native-vector-icons/Ionicons';
import {TouchableHighlight} from 'react-native';
import {colors} from '../styles/colors';
import {Tabs2} from './tabsDetails';

const Stack = createStackNavigator<Record<string, object | undefined>>();

export interface Props {
    navigation?: any;
    icon?: Icon;
}

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
                    headerTitleAlign: 'left',
                    headerRight: () => <Attach />,
                }}>
                <Stack.Screen
                    name={Routes.LOGIN.name}
                    component={Routes.LOGIN.screen}
                    options={Routes.LOGIN.options}
                />
                <Stack.Screen name={Routes.TABS2.name} component={Tabs2} />
                <Stack.Screen
                    options={{headerShown: false}}
                    name={Routes.TABS.name}
                    component={Tabs}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
