const {NODE_SERVER_SCHEME,NODE_SERVER_HOST,NODE_SERVER_PORT} = process.env;
const hostUrl = `${NODE_SERVER_SCHEME}://${NODE_SERVER_HOST}:${NODE_SERVER_PORT}`;

export const getSaved = () => {
    // return a promise with the data from our api endpoing
    return fetch(`http://localhost:3000/history/saved`, {
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