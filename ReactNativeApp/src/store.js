// @flow
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import createOidcMiddleware, { reducer as oidcReducer } from 'redux-oidc';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import userManager from './Auth/userManager';
import authWebViewManagerReducer from './Auth/AuthWebViewManager/reducer';
import signinPageReducer from './Auth/SigninPageReducer';

const logger = createLogger({
  collapsed: true
});

const oidcMiddleware = createOidcMiddleware(userManager);

const rootReducer = combineReducers({
  OIDC: oidcReducer,
  AuthWebViewManager: authWebViewManagerReducer,
  SigninPage: signinPageReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(oidcMiddleware, thunk, logger));

// need to dispatch some event so that redux-oidc loads the user from
// oidc-client's userManager and populates the redux store,
// otherwise state.OIDC.user will be null until any action is dispatched
store.dispatch({type:''});

export default store;
