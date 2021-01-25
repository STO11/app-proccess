import detailsScreen from '../screens/details/DetailsScreen';
import HomeScreen from '../screens/home/HomeScreen';
import loginScreen from '../screens/login/LoginScreen';
import profileScreen from '../screens/profile/ProfileScreen';

export const Routes = {
    LOGIN: {
        screen: loginScreen,
        name: 'Login',
        options: {
            title: 'Login Page',
            headerStyle: {},
            // headerTintColor: 'white',
            headerShown: false,
            animationEnabled: false,
        },
    },
    HOME: {
        screen: HomeScreen,
        name: 'Home',
        title: 'Home Page',
        options: {
            title: 'PROCESSOS',
            animationEnabled: false,
            //headerStyle: {},
            headerShown: false,
            // headerTintColor: 'white',
        },
    },
    DETAILS: {
        screen: detailsScreen,
        name: 'PROCESSO',
        title: 'PROCESSOS',
        options: {
            title: 'PROCESSOS',
            headerStyle: {},
        },
    },
    PROFILE: {
        screen: profileScreen,
        name: 'Profile',
        title: 'Perfil',
        options: {
            title: 'PERFIL',
            headerStyle: {},
            headerShown: false,
            // headerTintColor: 'white',
        },
    },
    LOGINOFFLINE: {
        screen: loginScreen,
        name: 'LoginOffline',
        options: {
            title: 'Login Offline',
            headerStyle: {},
            // headerTintColor: 'white',
            headerShown: false,
            animationEnabled: false,
        },
    },
    TABS: {screen: null, name: 'Tabs'},
    STACK: {screen: null, name: 'Stack'},
};
