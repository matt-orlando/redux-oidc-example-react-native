// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, View, WebView } from 'react-native';
import { connect } from 'react-redux';
import store from '../../store';

import { showWebView, hideWebView } from './actions';

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    flexDirection: 'column'
  }
});

const open = (params: { url: string }) => {
  store.dispatch(showWebView(params.url));
};

const onLoadStartListeners = [];
const addOnLoadStartListener = (listener: Function) => {
  onLoadStartListeners.push(listener);
};

const loadStart = (event) => {
  onLoadStartListeners.forEach((listener) => {
    listener(event.nativeEvent.url);
  });
};

const close = () => {
  store.dispatch(hideWebView());
};

class AuthWebViewManager extends Component {
  render() {
    if (this.props.showWebView === false || this.props.enabled === false) {
      return this.props.children;
    }

    return (
      <View style={ styles.rootView }>
        <Button
          color={ '#d81111' }
          onPress={ close }
          title="Cancel"
        />
        <WebView
          source={{ uri: this.props.url }}
          onLoadStart={ loadStart }
        />
      </View>
    );
  }
}

AuthWebViewManager.propTypes = {
  children: PropTypes.element.isRequired,
  enabled: PropTypes.bool.isRequired,
  showWebView: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    showWebView: state.AuthWebViewManager.showWebView,
    url: state.AuthWebViewManager.url
  };
}

const ConnectedAuthWebViewManager = connect(mapStateToProps)(AuthWebViewManager);

export {
  open,
  addOnLoadStartListener,
  close
};

export default ConnectedAuthWebViewManager;
