const {REACT_APP_NODE_SERVER_SCHEME,REACT_APP_NODE_SERVER_HOST,REACT_APP_NODE_SERVER_PORT} = process.env;
const hostUrl = `${REACT_APP_NODE_SERVER_SCHEME}://${REACT_APP_NODE_SERVER_HOST}:${REACT_APP_NODE_SERVER_PORT}`;

export const checkAuthSuccess = () => {
    // NOTE: the endpoint url is butchered when passed to the
    // fetch function. Haven't figured out why this occurs yet.
    const endpoint = hostUrl+'/auth/login/success';
    // return a promise with the data from our api endpoing
    return fetch(`http://nodeexpressoauth2reddit-env-1.eba-uf64jrde.us-east-1.elasticbeanstalk.com/auth/login/success`, {
        method: 'GET',
        credentials: "include",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
        }
    }).then((response) => {
        return response.json()
    });
}