import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import AuthForm from '../components/auth-form';
import {logIn} from '../actions/user';

class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const {isAuthorized} = this.props;

        return (
            <div>
                {
                    isAuthorized &&
                    <Redirect to="/"/>
                }

                <AuthForm onSubmit={this.onSubmit}/>
            </div>
        );
    }

    onSubmit(values) {
        const {username, password} = values;
        this.props.dispatch(logIn(username, password));
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.user.isAuthorized
    };
};

export default connect(mapStateToProps)(Auth);
