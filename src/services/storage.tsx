import AsyncStorage from '@react-native-async-storage/async-storage';
import User from '../models/User';
import DocumentPicker from 'react-native-document-picker';

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

    export async function fakeAttach(name: string) {
        try {
            await AsyncStorage.setItem('@attach', name);
            return true;
        } catch (error) {
            return false;
        }
    }

    export async function getFakeAttach() {
        try {
            let name = await AsyncStorage.getItem('@attach');
            if (name != null) {
                return name;
            }
            return '';
        } catch (error) {
            return '';
        }
    }

    export async function deleteFakeAttach() {
        try {
            let name = await AsyncStorage.getItem('@attach');
            if (name != null) {
                await AsyncStorage.removeItem('@attach');
            }
            return true;
        } catch (error) {
            return false;
        }
    }

    export async function pickDoc() {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
            });
            fakeAttach(res.name);
            // console.log(
            //     res.uri,
            //     res.type, // mime type
            //     res.name,
            //     res.size,
            // );
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    }
}
