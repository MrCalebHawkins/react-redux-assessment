import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from "react-redux"
import App from './App';
import logger from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.min.css'
import user from "./modules/userModule";
import events from "./modules/eventsModule";
import reminders from "./modules/reminderModule";
import './index.css';

const asyncMiddleware = storeAPI => next => action => {
    if (typeof action === 'function') {
        return action(storeAPI.dispatch, storeAPI.getState)
    }

    return next(action)
}

const rootReducer = combineReducers({user, events, reminders})

const middlewareEnhancer = applyMiddleware(asyncMiddleware, logger)
const store = createStore(rootReducer, middlewareEnhancer)


ReactDOM.render(
  // <React.StrictMode>
  //   App here is the actual content from App.js
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
    // root is where app is rendered too 'root' is found in index.html
  document.getElementById('root')
);


