import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import BlogList from '../components/blog-list';
import {
    getAll, 
    deleteOne, 
    updateOne, 
    addOne, 
    resetShouldRedirectAfterComplition,
    shouldUpdateBlog
} from '../actions/blogs';


class AllBlogs extends React.Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(resetShouldRedirectAfterComplition());
    }
    
    render() {
        const {isAuthorized, blogs, blogWhichShouldBeUpdated} = this.props;

        return (
            <div className="blogs-container">
                {
                    !isAuthorized &&
                    <Redirect to="/login"/>
                }

                {
                    blogWhichShouldBeUpdated &&
                    <Redirect to="/update-blog"/>
                }

                {
                    isAuthorized && (
                        <div>
                            <Link to="/new-blog">
                                New blog
                            </Link>
                            
                            <BlogList blogs={blogs} onDelete={this.onDelete} onUpdate={this.onUpdate}/>
                        </div> 
                    )
                    
                }
            </div>
        );
    }

    onDelete(id) {
        const {authToken, dispatch} = this.props;
        dispatch(deleteOne(authToken, id));
    }

    onUpdate(id) {
        const {blogs, dispatch} = this.props;
        const indexOfBlogWhichShouldBeUpdated = blogs
            .map(blog => blog._id)
            .indexOf(id);
        
        dispatch(shouldUpdateBlog(blogs[indexOfBlogWhichShouldBeUpdated]));
    }

    onRefresh() {
        const {authToken, dispatch} = this.props;
        dispatch(getAll(authToken));
    }
}

const mapStateToProps = (state) => ({
    isAuthorized: state.user.isAuthorized,
    blogs: state.blogs.blogs,
    authToken: state.user.authToken,
    blogWhichShouldBeUpdated: state.blogs.blogWhichShouldBeUpdated
});

export default connect(mapStateToProps)(AllBlogs);