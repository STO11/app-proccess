import {API_URL, API_TOKEN} from '../constants/constants';
import axios from 'axios';

export module Provider {
    export async function getCases(
        base_url: string = '',
        api_token: string = '',
    ) {
        return new Promise((resolve, reject) => {
            let _base_url = API_URL;
            let _api_token = API_TOKEN;

            if (base_url !== '') {
                _base_url = base_url;
            }
            if (api_token !== '') {
                _api_token = api_token;
            }
            var obj: any = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-frontend-test': _api_token,
                },
            };
            axios
                .get(_base_url + '/lawsuit/all', obj)
                //.then((response) => response.json())
                .then((responseData) => {
                    resolve(responseData.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
