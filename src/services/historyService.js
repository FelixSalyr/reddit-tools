const {NODE_SERVER_SCHEME,NODE_SERVER_HOST,NODE_SERVER_PORT} = process.env;
const hostUrl = `${NODE_SERVER_SCHEME}://${NODE_SERVER_HOST}:${NODE_SERVER_PORT}`;

export const getSaved = () => {
    // NOTE: the endpoint url is butchered when passed to the
    // fetch function. Haven't figured out why this occurs yet.
    const endpoint = hostUrl+'/history/saved';
    // return a promise with the data from our api endpoint
    return fetch(`http://nodeexpressoauth2reddit-env-1.eba-uf64jrde.us-east-1.elasticbeanstalk.com/history/saved`, {
        method: 'GET',
        credentials: "include",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
        }
    }).then((response) => {
        console.log(response)
        return response.json()
    });
}