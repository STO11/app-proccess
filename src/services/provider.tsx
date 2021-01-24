import {API_URL, API_TOKEN} from '../constants/constants';

export module Provider {
    export async function getCases() {
        return new Promise((resolve, reject) => {
            var obj: any = {
                link: API_URL + '/lawsuit/all',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-frontend-test': API_TOKEN,
                },
            };
            fetch(obj.link, obj)
                .then((response) => response.json())
                .then((responseData) => {
                    resolve(responseData);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
