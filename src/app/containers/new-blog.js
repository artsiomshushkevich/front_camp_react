import React from 'react';
import {connect} from 'react-redux';
import BlogForm from '../components/blog-form';
import {addOne} from '../actions/blogs';
import {Redirect} from 'react-router-dom';

class NewBlog extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const {shouldRedirectAfterComplition} = this.props;

        return (
            <div>
                {
                    shouldRedirectAfterComplition &&
                    <Redirect to="/"/>
                }

                <BlogForm onSubmit={this.onSubmit}/>
            </div>
        );
    }

    onSubmit(values) {
        const {title, article} = values;
        const {dispatch, authToken} = this.props;

        dispatch(addOne(authToken, title, article));
    }
}

const mapStateToProps = (state) => {
    return {
        authToken: state.user.authToken,
        shouldRedirectAfterComplition: state.blogs.shouldRedirectAfterComplition
    };
};

export default connect(mapStateToProps)(NewBlog);



