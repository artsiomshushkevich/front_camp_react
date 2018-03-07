import {combineReducers} from 'redux';
import {
    LOGIN,
    REGISTER,
    RECEIVE_JWT
} from '../actions/index';

const user = (state = {
    jwtObj: null,
    isAuthenticated: false
}, action) => {

    switch(action.type) {
        case RECEIVE_JWT: 
            console.dir(action.jwtObj);

            return {
                jwtObj: action.jwtObj,
                isAuthenticated: true
            };
        default:
            return state;
    }
}

export default user;

