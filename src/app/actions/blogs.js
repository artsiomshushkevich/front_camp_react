export const GET_ALL = 'GET_ALL';
export const GET_ONE = 'GET_ONE';
export const DELETE_ONE = 'DELETE_ONE';
export const UPDATE_ONE = 'UPDATE_ONE';
export const ADD_ONE = 'ADD_ONE';
export const BLOGS_RECEIVED = 'BLOGS_RECEIVED';    

export const blogsReceived = (blogs) => ({
    type: BLOGS_RECEIVED,
    blogs
});

const _blogsRequestBaseURL = 'http://localhost:3000/blogs';
const _createBlogsReqeustConfig = (method, jwtToken,  payload) => {
    return {
        method,
        headers: {
            'Authorization': jwtToken
        },
        body: JSON.stringify(payload)
    };
};

export const getAll = (jwtToken) => {
    return (dispatch) => {
        const config = _createBlogsReqeustConfig('GET', jwtToken, null);
        return fetch(_blogsRequestBaseURL, config)
            .then(response => response.json())
            .then(json => dispatch(blogsReceived(json)));
    };
     
};