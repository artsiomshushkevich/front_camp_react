import React from 'react';
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LoginForm from '../components/login-form';
import {logIn} from '../actions/index';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
    }

    onLoginFormSubmit(values){
        const {username, password} = values;
        this.props.dispatch(logIn(username, password));
    }

    render() {
        const {store} = this.props;

        return ( 
            <Provider store={store}>
                <Router>
                    <div>
                        <ul>
                            {/* <li>
                                <Link to="/">Home</Link>
                            </li> */}
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            {/* <li>
                                <Link to="/register">Register</Link>
                            </li> */}
                        </ul>

                        <hr/>

                        {/* <Route exact path="/" component={ArticleList} /> */}
                        <Route path="/login" component={() => (<LoginForm onSubmit={this.onLoginFormSubmit} />)}/>
                        {/* <Route path="/register" component={RegisterForm}/> */}
                        {/* <Route path="/addArticle" component={AddArticleForm}/>
                        <Route path="/updateArticle" component={UpdateArticleForm}/> */}
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