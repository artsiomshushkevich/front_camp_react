import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import Root from './containers/root'

const middleware = [thunk];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

render(
    <Root store={store}/>,
    document.getElementById('app')
)