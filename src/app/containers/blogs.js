import React from 'react';
import {connect} from 'react-redux';
import AlertMessage from '../components/alert-message';
import BlogList from '../components/blog-list';
import {getAll} from '../actions/blogs';

class Blogs extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch, isAuthorized, authToken} = this.props;

        if (isAuthorized) {
            dispatch(getAll(authToken));
        }
    }

    render() {
        const {isAuthorized, blogs} = this.props;

        return (
            <div className="blogs-container">
                {
                    !isAuthorized &&
                    <AlertMessage message={'User is not authorized!'}/>
                }

                {
                    isAuthorized &&
                    <BlogList blogs={blogs}/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthorized: state.user.isAuthorized,
    blogs: state.blogs.blogs,
    authToken: state.user.authToken
});

export default connect(mapStateToProps)(Blogs);