export const GET_ALL = 'GET_ALL';
export const GET_ONE = 'GET_ONE';
export const DELETE_ONE = 'DELETE_ONE';
export const UPDATE_ONE = 'UPDATE_ONE';
export const ADD_ONE = 'ADD_ONE';
export const BLOGS_RECEIVED = 'BLOGS_RECEIVED';
export const BLOG_ADDED = 'BLOG_ADDED';
export const BLOG_DELETED = 'BLOG_DELETED';
export const CLEAR_SUCCESSFUL_EDIT_OPERATION_FLAG = 'CLEAR_SUCCESSFUL_EDIT_OPERATION_FLAG';

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

export const clearSuccessfulEditOperationFlag = () => ({
    type: CLEAR_SUCCESSFUL_EDIT_OPERATION_FLAG
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
        config.body = JSON.stringify(payload)
    }

    return config
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
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(json => dispatch(blogDeleted(json)));
    };
};

export const updateOne = (authToken, blogId, title, article) => {
    return (dispatch) => {
        const payload = {title, article};
        const config = _createBlogsReqeustConfig('PUT', authToken, payload);

        return fetch(`${_blogsRequestBaseURL}/${blogId}`, config)
            .then(response => response.json())
            .then(json => dispatch(getAll()));
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