import React from 'react';
import Blog from './blog';

export default class BlogList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {blogs, onDelete, onUpdate} = this.props;

        return (
            <div>
                {
                    blogs.map((blog, index) => {
                        return <Blog 
                            key={blog._id} 
                            onDelete={() => onDelete(blog._id)} 
                            onUpdate={() => onUpdate(blog._id)} 
                            blog={blog}
                        />
                    })
                }
            </div>

        );
    }
}