export module Provider {
    export async function getCases() {
        return new Promise((resolve, reject) => {
            var obj = {
                link: 'http://frontendtest.aurum.com.br:3000/lawsuit/all',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-frontend-test': 'aurumtest',
                },
            };
            fetch(obj.link, obj)
                .then((response) => response.json())
                .then((responseData) => {
                    //console.log(responseData.cases[0].court);
                    resolve(responseData);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
