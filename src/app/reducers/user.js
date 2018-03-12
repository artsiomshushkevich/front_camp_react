import {JWT_RECEIVED, LOGOUT} from '../actions/user';

const user = (state = {
    username: '',
    authToken: '',
    isAuthorized: false
}, action) => {

    switch(action.type) {
        case JWT_RECEIVED: 
            return {
                username: action.jwtObj.username,
                authToken: action.jwtObj.authToken,
                isAuthorized: true
            };
        case LOGOUT: 
            return {
                username: '',
                authToken: '',
                isAuthorized: false 
            }
        default:
            return state;
    }
}

export default user;