import React from 'react';
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Auth from './auth';
import {logIn, register} from '../actions/user';
import AllBlogs from './all-blogs';
import NewBlog from './new-blog';
import UpdateBlog from './update-blog';

import mainStyles from '../../styles/main.css';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {store} = this.props;
     

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

                        <Switch>
                            <Route exact path="/" component={AllBlogs}/>
                            <Route path="/login" component={Auth}/>
                            <Route path="/new-blog" component={NewBlog}/>
                            <Route path="/update-blog" component={UpdateBlog}/>
                        </Switch>
                        
                    </div>
                </Router>
            </Provider>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthorized: state.user.isAuthorized
});

export default connect(mapStateToProps)(Root);