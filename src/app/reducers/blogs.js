import {BLOGS_RECEIVED} from '../actions/blogs';

const blogs = (state = {
    blogs: []
}, action) => {

    switch(action.type) {
        case BLOGS_RECEIVED: 
            return {
                blogs: action.blogs
            };
        default:
            return state;
    }
}

export default blogs;