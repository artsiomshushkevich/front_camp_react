import React from 'react';
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Auth from './auth';
import {logIn, register} from '../actions/user';
import AllBlogs from './all-blogs';
import Blog from './blog';

import mainStyles from '../../styles/main.css';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

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
                        </ul>

                        <hr/>

                        <Route exact path="/" component={AllBlogs}/>
                        <Route path="/login" component={Auth}/>
                        <Route path="/blog" component={Blog}/>

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