// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

import userManager from './userManager';
import { signinPageError, signinPageClear } from './SigninPageActions';

class SigninPage extends React.Component {
  static defaultProps: {
    user: false
  }

  render() {
    const { user } = this.props;
    const LogIn = () => {
      userManager.signinPopup().then(() => {
        this.props.dispatch(signinPageClear());
      }, (err) => {
        this.props.dispatch(signinPageError(err.message + ': Remember to start OIDC Provider and run adb reverse commands.'));
      });
    };

    if (!user) {
      return (
        <View>
          <Text>Please Log In</Text>
          <Button
            onPress={ LogIn }
            title="Log In"
          />
          <Text>{this.props.message}</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

SigninPage.propTypes = {
  children: PropTypes.element.isRequired,
  user: PropTypes.object,
  message: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.OIDC.user,
    message: state.SigninPage.message
  };
}

export default connect(mapStateToProps)(SigninPage);
