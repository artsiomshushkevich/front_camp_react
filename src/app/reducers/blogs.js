import {
    BLOGS_RECEIVED,
    BLOG_ADDED,
    // BLOG_UPDATED,
    BLOG_DELETED,
    CLEAR_SUCCESSFUL_EDIT_OPERATION_FLAG
} from '../actions/blogs';

const blogs = (state = {
    blogs: [],
    successfulEditOperation: false
}, action) => {

    switch(action.type) {
        case BLOGS_RECEIVED: 
            return {
                blogs: action.blogs,
                successfulEditOperation: state.successfulEditOperation
            };
        case BLOG_ADDED:
            state.blogs.push(action.addedBlog);

            return {
                blogs: state.blogs,
                successfulEditOperation: true
            };

        case BLOG_DELETED:
            const index = state.blogs.map(blog => blog._id).indexOf(action.deletedBlog._id);
            var m = state.blogs.slice();
            m.splice(index, 1);

            return {
                blogs: m,
                successfulEditOperation: true
            };
        case CLEAR_SUCCESSFUL_EDIT_OPERATION_FLAG:
            return {
                blogs: state.blogs,
                successfulEditOperation: false
            };
        default:
            return state;
    }
}

export default blogs;