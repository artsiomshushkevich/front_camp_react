import React from 'react';
import {LocalForm, Control} from 'react-redux-form';

export default class AuthForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onSubmit} = this.props;

        return (
            <LocalForm
                onSubmit={(values) => onSubmit(values)}
            >
                <label htmlFor="username">Username:</label>
                <Control.text id="username" model=".username"/>

                <label htmlFor="password">Password:</label>
                <Control.password id="password" model=".password"/>

                <button type="submit">Submit</button>
            </LocalForm>
        );

    }
}