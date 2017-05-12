import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import config from './config';
import reducers from './reducers';
import Router from './Router';
// import { activate } from '../actions/action_login.js';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, ReduxPromise));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
