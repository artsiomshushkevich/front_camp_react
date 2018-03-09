import React from 'react';
import alertMessageStyles from '../../styles/alert-message.css';

export default class AlertMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {message} = this.props;

        return (
            <div className="alert-message-container">
                <span>{message}</span>
            </div>
        );
    }
}