import React from 'react';
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AuthForm from '../components/auth-form';
import {logIn, register} from '../actions/index';
import mainStyles from '../../styles/main.css';
import Redirect from 'react-router-dom/Redirect';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
        this.onRegisterFormSubmit = this.onRegisterFormSubmit.bind(this);
    }

    onLoginFormSubmit(values) {
        const {username, password} = values;
        this.props.dispatch(logIn(username, password));
    }

    onRegisterFormSubmit(values) {
        const {username, password} = values;
        this.props.dispatch(register(username, password));
    }

    render() {
        const {store} = this.props;
        const {isAuthenticated} = store;

        return ( 
            <Provider store={store}>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>

                        <hr/>

                        <Route path="/login" component={() => (<AuthForm onSubmit={this.onLoginFormSubmit} />)}/>
                        <Route path="/register" component={() => (<AuthForm onSubmit={this.onRegisterFormSubmit} />)}/>
                        {
                            isAuthenticated &&
                            <Redirect to="/"/>
                        }
                    </div>
                </Router>
            </Provider>
        );
    }
}

const mapStateToProps = (state) => ({
    jwtObj: state.jwtObj,
    isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(Root);