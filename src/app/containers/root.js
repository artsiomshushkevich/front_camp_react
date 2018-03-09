import React from 'react';
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Auth from './auth';
import {logIn, register} from '../actions/user';
import Blogs from './blogs';

import mainStyles from '../../styles/main.css';

class Root extends React.Component {
    constructor(props) {
        super(props);
        // this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
        // this.onRegisterFormSubmit = this.onRegisterFormSubmit.bind(this);
    }

    // onLoginFormSubmit(values) {
    //     const {username, password} = values;
    //     this.props.dispatch(logIn(username, password));
    // }

    // onRegisterFormSubmit(values) {
    //     const {username, password} = values;
    //     this.props.dispatch(register(username, password));
    // }

    render() {
        const {store} = this.props;
        const {isAuthorized} = store;

        return ( 
            <Provider store={store}>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            {/* <li>
                                <Link to="/register">Register</Link>
                            </li> */}
                        </ul>

                        <hr/>

                        <Route exact path="/" component={Blogs}/>
                        <Route path="/login" component={Auth}/>
                        {/* <Route path="/register" component={() => (<AuthForm onSubmit={this.onRegisterFormSubmit} />)}/> */}
                        
                    </div>
                </Router>
            </Provider>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthorized: state.isAuthorized
});

export default connect(mapStateToProps)(Root);