// @flow
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import store from './store';

import SigninPage from './Auth/SigninPage';
import AuthWebViewManager from './Auth/AuthWebViewManager';
import Todos from './Todos';
import userManager from './Auth/userManager';

class OIDCExample extends Component {
  render() {
    return (
      <Provider store={ store }>
        <OidcProvider store={ store } userManager={ userManager }>
          <AuthWebViewManager enabled={ true }>
            <SigninPage>
              <Todos />
            </SigninPage>
          </AuthWebViewManager>
        </OidcProvider>
      </Provider>
    );
  }
};

AppRegistry.registerComponent('OIDCExample', () => OIDCExample);
