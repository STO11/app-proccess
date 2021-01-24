import {Storage} from '../services/storage';

export module LoginController {
    export async function login(user: string, password: string) {
        try {
            if (
                user === 'candidato_mobile@email.com.br' &&
                password === '123456'
            ) {
                await Storage.setUserLogin(user);
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    export async function logout() {
        try {
            await Storage.logout();
            return true;
        } catch (error) {
            return false;
        }
    }

    export async function getUser() {
        try {
            let user = await Storage.getUserLogin();
            if (user != null) {
                return user;
            }
            return null;
        } catch (error) {
            return null;
        }
    }
}
