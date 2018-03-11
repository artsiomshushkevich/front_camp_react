import {
    BLOGS_RECEIVED,
    BLOG_ADDED,
    BLOG_UPDATED,
    BLOG_DELETED,
    SHOULD_UPDATE_BLOG,
    SHOULD_REDIRECT_AFTER_COMPLITION,
    RESET_SHOULD_REDIRECT_AFTER_COMPLITION
} from '../actions/blogs';

const _findBlogById = (blogs, id) => {
    return blogs
        .map(blog => blog._id)
        .indexOf(id);
};

const _addNewBlog = (state, newBlog) => {
    var blogs = state.blogs.slice(0);
    blogs.push(newBlog);
    return blogs;
};

const _deleteBlog = (state, deletedBlog) => {
    const indexOfDeletedBlog = _findBlogById(state.blogs, deletedBlog._id);

    var blogs = state.blogs.slice(0);
    blogs.splice(indexOfDeletedBlog, 1);

    return blogs;
};



const blogs = (state = {
    blogs: [],
    shouldRedirectAfterComplition: false
}, action) => {

    switch(action.type) {
        case BLOGS_RECEIVED: 
            return {
                blogs: action.blogs,
                shouldRedirectAfterComplition: false,
                blogWhichShouldBeUpdated: null
            };
        case BLOG_ADDED:
            return {
                blogs: _addNewBlog(state, action.addedBlog),
                shouldRedirectAfterComplition: true,
                blogWhichShouldBeUpdated: null
            };
        case BLOG_DELETED:
            return {
                blogs: _deleteBlog(state, action.deletedBlog),
                shouldRedirectAfterComplition: false,
                blogWhichShouldBeUpdated: null
            };
        case SHOULD_REDIRECT_AFTER_COMPLITION:
            return {
                blogs: state.blogs,
                shouldRedirectAfterComplition: true,
                blogWhichShouldBeUpdated: null
            };
        case RESET_SHOULD_REDIRECT_AFTER_COMPLITION:
            return {
                blogs: state.blogs,
                shouldRedirectAfterComplition: false,
                blogWhichShouldBeUpdated: null
            };
        case SHOULD_UPDATE_BLOG:
            return {
                blogs: state.blogs,
                shouldRedirectAfterComplition: false,
                blogWhichShouldBeUpdated: action.blogWhichShouldBeUpdated
            };
        default:
            return state;
    }
}

export default blogs;