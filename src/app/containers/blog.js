import React from 'react';
import {connect} from 'react-redux';
import BlogForm from '../components/blog-form';
import {addOne} from '../actions/blogs';
import {Redirect} from 'react-router-dom';

class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const {successfulEditOperation } = this.props;

        return (
            
            <div>
                {
                    successfulEditOperation &&
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
        successfulEditOperation: state.blogs.successfulEditOperation
    };
};

export default connect(mapStateToProps)(Blog);



