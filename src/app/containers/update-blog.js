import React from 'react';
import {connect} from 'react-redux';
import BlogForm from '../components/blog-form';
import {updateOne} from '../actions/blogs';
import {Redirect} from 'react-router-dom';

class UpdateBlog extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const {shouldRedirectAfterComplition, blogWhichShouldBeUpdated} = this.props;
        const {title, article} = blogWhichShouldBeUpdated || {title: '', article: ''};

        return (
            <div>
                {
                    shouldRedirectAfterComplition &&
                    <Redirect to="/"/>
                }

                <BlogForm title={title} article={article} onSubmit={this.onSubmit}/>
            </div>
        );
    }

    onSubmit(values) {
        const {title, article} = values;
        const {dispatch, authToken, blogWhichShouldBeUpdated} = this.props;

        dispatch(updateOne(authToken, blogWhichShouldBeUpdated._id, title, article));
    }
}

const mapStateToProps = (state) => {
    return {
        authToken: state.user.authToken,
        shouldRedirectAfterComplition: state.blogs.shouldRedirectAfterComplition,
        blogWhichShouldBeUpdated: state.blogs.blogWhichShouldBeUpdated
    };
};

export default connect(mapStateToProps)(UpdateBlog);