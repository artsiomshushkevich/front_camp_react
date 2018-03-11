import {JWT_RECEIVED} from '../actions/user';

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
        default:
            return state;
    }
}

export default user;