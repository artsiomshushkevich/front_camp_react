import {JWT_RECEIVED} from '../actions/index';

const user = (state = {
    jwtObj: null,
    isAuthenticated: false
}, action) => {

    switch(action.type) {
        case JWT_RECEIVED: 
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