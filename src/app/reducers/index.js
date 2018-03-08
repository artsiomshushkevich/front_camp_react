import {combineReducers} from 'redux';
import blogs from './blogs';
import user from './user';

const app = combineReducers({
    user,
    blogs
});

export default app;

