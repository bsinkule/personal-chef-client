import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import configStore, { history } from './configStore'

import App from './app';
import AppRouter from './components/AppRouter';
import Auth from "./Auth";

const store = configStore()
window.store = store

const auth = new Auth();

let state = {};
window.setState = (changes) => {
  state = Object.assign({}, state, changes)
  ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <App {...state}>
            <AppRouter />
          </App>
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('app')
  )
}

let initialState = {
  name: 'initialAuth',
  location: location.pathname.replace(/^\/?|\/$/g, ""),
  auth
}

window.setState(initialState)