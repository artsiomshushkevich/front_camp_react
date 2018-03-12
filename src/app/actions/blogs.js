export const GET_ALL = 'GET_ALL';
export const GET_ONE = 'GET_ONE';
export const DELETE_ONE = 'DELETE_ONE';
export const UPDATE_ONE = 'UPDATE_ONE';
export const ADD_ONE = 'ADD_ONE';
export const BLOGS_RECEIVED = 'BLOGS_RECEIVED';
export const BLOG_ADDED = 'BLOG_ADDED';
export const BLOG_DELETED = 'BLOG_DELETED';
export const SHOULD_UPDATE_BLOG = 'SHOULD_UPDATE_BLOG';
export const SHOULD_REDIRECT_AFTER_COMPLITION = 'SHOULD_REDIRECT_AFTER_COMPLITION';
export const RESET_SHOULD_REDIRECT_AFTER_COMPLITION = 'RESET_SHOULD_REDIRECT_AFTER_COMPLITION';

const _blogsRequestBaseURL = 'http://localhost:3000/blogs';

export const blogsReceived = (blogs) => ({
    type: BLOGS_RECEIVED,
    blogs
});

export const blogAdded = (addedBlog) => ({
    type: BLOG_ADDED,
    addedBlog
});

export const blogDeleted = (deletedBlog) => ({
    type: BLOG_DELETED,
    deletedBlog
});


export const shouldUpdateBlog = (blogWhichShouldBeUpdated) => ({
    type: SHOULD_UPDATE_BLOG,
    blogWhichShouldBeUpdated
});

export const shouldRedirectAfterComplition = () => ({
    type: SHOULD_REDIRECT_AFTER_COMPLITION
});

export const resetShouldRedirectAfterComplition = () => ({
    type: RESET_SHOULD_REDIRECT_AFTER_COMPLITION
});

const _createBlogsReqeustConfig = (method, authToken,  payload) => {
    const config = {
        method,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': authToken
        }
    };

    if (payload) {
        config.body = JSON.stringify(payload);
    }

    return config;
};

export const getAll = (authToken) => {
    return (dispatch) => {
        const config = _createBlogsReqeustConfig('GET', authToken, null);
        return fetch(_blogsRequestBaseURL, config)
            .then(response => response.json())
            .then(json => dispatch(blogsReceived(json)));
    };
};

export const deleteOne = (authToken, blogId) => {
    return (dispatch) => {
        const config = _createBlogsReqeustConfig('DELETE', authToken, null);
        return fetch(`${_blogsRequestBaseURL}/${blogId}`, config)
            .then(response => response.json())
            .then(json => dispatch(blogDeleted(json)));
    };
};

export const updateOne = (authToken, blogId, title, article) => {
    return (dispatch) => {
        const payload = {title, article};
        const config = _createBlogsReqeustConfig('PUT', authToken, payload);

        return fetch(`${_blogsRequestBaseURL}/${blogId}`, config)
            .then(response => response.json())
            .then(json => {
                dispatch(getAll(authToken));
                dispatch(shouldRedirectAfterComplition());
            });
    };
};

export const addOne = (authToken, title, article) => {
    return (dispatch) => {
        const payload = {title, article};
        const config = _createBlogsReqeustConfig('POST', authToken, payload);

        return fetch(_blogsRequestBaseURL, config)
            .then(response => response.json())
            .then(json => dispatch(blogAdded(json)));
    };
};