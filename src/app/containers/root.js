import React from 'react';
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Auth from './auth';
import {logOut} from '../actions/user';
import AllBlogs from './all-blogs';
import NewBlog from './new-blog';
import UpdateBlog from './update-blog';

import mainStyles from '../../styles/main.css';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {store, isAuthorized, username} = this.props;
     

        return ( 
            <Provider store={store}>
                <Router>
                    <div>
                        <ul>
                            {
                                !isAuthorized &&
                                (
                                    <li>
                                        <Link to="/auth">Auth</Link>
                                    </li>
                                )
                            }
                            {
                                isAuthorized &&
                                (
                                    <li>
                                        <Link to="#" onClick={(event) => {
                                            event.preventDefault();
                                            this.onLogOut();
                                        }}>Log Out</Link>
                                        <span>({username})</span>
                                    </li>
                                )
                            }
                            
                        </ul>

                        <hr/>

                        <Switch>
                            <Route exact path="/" component={AllBlogs}/>
                            <Route path="/auth" component={Auth}/>
                            <Route path="/new-blog" component={NewBlog}/>
                            <Route path="/update-blog" component={UpdateBlog}/>
                        </Switch>
                        
                    </div>
                </Router>
            </Provider>
        );
    }

    onLogOut() {
        this.props.dispatch(logOut());
    }
}

const mapStateToProps = (state) => ({
    isAuthorized: state.user.isAuthorized,
    username: state.user.username
});

export default connect(mapStateToProps)(Root);