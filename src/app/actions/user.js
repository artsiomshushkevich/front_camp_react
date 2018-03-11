import {getAll} from './blogs';


export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const JWT_RECEIVED = 'JWT_RECEIVED';

const _userRequestBaseURL = 'http://localhost:3000/users';

export const JWTReceived = (jwtObj) => ({
    type: JWT_RECEIVED,
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
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };
}

export const register = (username, password) => {
    return (dispatch) => {
        const config = _createAuthRequestConfig(username, password);

        return fetch(_userRequestBaseURL, config)
            .then(response => response.json())
            .then(jwtObj => dispatch(JWTReceived(jwtObj)));
    };
};

export const logIn = (username, password) => {
    return (dispatch) => {
        const config = _createAuthRequestConfig(username, password);

        return fetch(_userRequestBaseURL + '/login', config)
            .then(response => response.json())
            .then((jwtObj) =>{
                dispatch(JWTReceived(jwtObj));
                dispatch(getAll(jwtObj.authToken));
            });
    };
};


