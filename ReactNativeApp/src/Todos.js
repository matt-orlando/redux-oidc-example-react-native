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
        <FlatList
          data={[{key: 'First Item'}, {key: 'Second Item'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
};

export default Todos;
