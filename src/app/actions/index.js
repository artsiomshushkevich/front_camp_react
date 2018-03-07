export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const RECEIVE_JWT = 'RECEIVE_JWT';

export const receiveJWT = (jwtObj) => ({
    type: RECEIVE_JWT,
    jwtObj
});

const _createAuthRequestConfig = (username, password) => {
    const payload = {
        username: username,
        password: password
    };

    return {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };
}

export const register = (username, password) => {
    return (dispatch) => {
        const config = _createAuthRequestConfig(username, password);

        return fetch('http://localhost:3000/users/', config)
            .then(response => response.json())
            .then(jwtObj => dispatch(receiveJWT(jwtObj)));
    };
};

export const logIn = (username, password) => {
    return (dispatch) => {
        const config = _createAuthRequestConfig(username, password);

        return fetch('http://localhost:3000/users/login', config)
            .then(response => response.json())
            .then(jwtObj => dispatch(receiveJWT(jwtObj)));
    };
};


