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
        },
    },
    HOME: {
        screen: HomeScreen,
        name: 'Home',
        title: 'Home Page',
        options: {
            title: 'PROCESSOS',
            //headerStyle: {},
            //headerShown: false,
            // headerTintColor: 'white',
        },
    },
    DETAILS: {
        screen: detailsScreen,
        name: 'Details',
        title: 'PROCESSOS',
        options: {
            title: 'PROCESSOS',
            headerStyle: {},

            // headerTintColor: 'white',
            //headerShown: true,
            //tabBarVisible: false,
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
    TABS: {screen: null, name: 'Tabs'},
    TABS2: {screen: null, name: 'PROCESSO'},
};
