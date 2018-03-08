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
                <Control.text model=".username"/>
                <Control.password model=".password" />
                <input type="submit"/>
            </LocalForm>
        );

    }
}