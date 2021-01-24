import AsyncStorage from '@react-native-async-storage/async-storage';
import User from '../models/User';

export module Storage {
    export async function setUserLogin(user: any) {
        try {
            let userLogged = new User(user, true);
            await AsyncStorage.setItem('@user', JSON.stringify(userLogged));
            return true;
        } catch (error) {
            return null;
        }
    }

    export async function getUserLogin() {
        try {
            let user = await AsyncStorage.getItem('@user');
            if (user != null) {
                return JSON.parse(user);
            }
            return null;
        } catch (error) {
            return null;
        }
    }

    export async function onlineState() {
        try {
            let user = await AsyncStorage.getItem('@user');
            if (user != null) {
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    export async function logout() {
        try {
            await AsyncStorage.removeItem('@user');
            return true;
        } catch (error) {
            return false;
        }
    }
}
