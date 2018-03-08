import React from 'react';
import blogStyles from '../../styles/blog.css';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {blog, onDelete, onUpdate} = this.props;

        return (
            <div class="blog-container">
                <h1>{blog.title}</h1>
                <div>
                    <span>{blog.article}</span>
                </div>
                <div class="options-container">
                    <button onClick={onUpdate}>Update</button>
                    <button onClick={onDelete}>Delete</button>
                </div>        
            </div>
        );
    }
}