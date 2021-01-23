import detailsScreen from '../screens/details/DetailsScreen';
import homeScreen from '../screens/home/HomeScreen';
import loginScreen from '../screens/login/LoginScreen';
import profileScreen from '../screens/profile/ProfileScreen';

export const Routes = {
    LOGIN: {
        screen: loginScreen,
        name: 'Login',
        options: {
            title: 'Login Page',
            headerStyle: {},
            headerTintColor: 'white',
            headerShown: false,
        },
    },
    HOME: {
        screen: homeScreen,
        name: 'Home',
        title: 'Home Page',
        options: {
            title: 'PROCESSOS',
            headerStyle: {},
            headerTintColor: 'white',
        },
    },
    DETAILS: {
        screen: detailsScreen,
        name: 'Details',
        title: 'Details Page',
        options: {
            title: 'Details Page',
            headerStyle: {},
            headerTintColor: 'white',
        },
    },
    PROFILE: {
        screen: profileScreen,
        name: 'Profile',
        title: 'Perfil',
        options: {
            title: 'PERFIL',
            headerStyle: {},
            headerTintColor: 'white',
        },
    },
    TABS: {screen: null, name: ' '},
};
