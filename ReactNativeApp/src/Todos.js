// @flow
import React, { Component } from 'react';
import {
  Button,
  FlatList,
  Text,
  View
} from 'react-native';

import userManager from './Auth/userManager';

const LogOut = () => {
  userManager.removeUser();
}

class Todos extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={ LogOut }
          title="Log Out"
        />
        <Text>Success! Use CTRL + M on Windows or ⌘D on iOS and enable JS debugging, then you can view the redux log to see the details of the authentication result.</Text>
      </View>
    );
  }
};

export default Todos;
