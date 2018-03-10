import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AlertMessage from '../components/alert-message';
import BlogList from '../components/blog-list';
import {
    getAll, 
    deleteOne, 
    updateOne, 
    addOne, 
    clearSuccessfulEditOperationFlag
} from '../actions/blogs';


class AllBlogs extends React.Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
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
                    isAuthorized && (
                        <div>
                            <Link to="/blog">
                                New blog
                            </Link>
                            
                            <Link to="#" onClick={(event) => {
                                event.preventDefault();
                                this.onRefresh();
                            }}>
                                Refresh
                            </Link>

                            <BlogList blogs={blogs} onDelete={this.onDelete}/>
                        </div> 
                    )
                    
                }
            </div>
        );
    }

    onDelete(id) {
        const {authToken, dispatch} = this.props;
        dispatch(clearSuccessfulEditOperationFlag());
        dispatch(deleteOne(authToken, id));
    }

    onRefresh() {
        const {authToken, dispatch} = this.props;
        dispatch(clearSuccessfulEditOperationFlag());
        dispatch(getAll(authToken));
    }
}

const mapStateToProps = (state) => ({
    isAuthorized: state.user.isAuthorized,
    blogs: state.blogs.blogs,
    authToken: state.user.authToken
});

export default connect(mapStateToProps)(AllBlogs);