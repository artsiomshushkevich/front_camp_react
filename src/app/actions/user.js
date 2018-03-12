import {getAll} from './blogs';

export const AUTH = 'AUTH';
export const JWT_RECEIVED = 'JWT_RECEIVED';
export const LOGOUT = 'LOGOUT';

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

export const auth = (username, password) => {
    return (dispatch) => {
        const config = _createAuthRequestConfig(username, password);

        return fetch(_userRequestBaseURL + '/auth', config)
            .then(response => response.json())
            .then((jwtObj) =>{
                dispatch(JWTReceived(jwtObj));
                dispatch(getAll(jwtObj.authToken));
            });
    };
};

export const logOut = () => ({
    type: LOGOUT
});

