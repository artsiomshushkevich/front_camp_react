import React from 'react';
import {LocalForm, Control} from 'react-redux-form';

export default class BlogForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onSubmit, title, article} = this.props;

        return (
            <LocalForm
                onSubmit={(values) => onSubmit(values)}
                initialState={{
                    title: title || '',
                    article: article || ''
                }}
            >
                <label htmlFor="title">Title:</label>
                <Control.text id="title" model=".title"/>

                <label htmlFor="article">Article:</label>
                <Control.textarea id="article" model=".article"/>
                
                <button type="submit">Add</button>
            </LocalForm>    
        );
    }
}