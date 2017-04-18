import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import SocketIOClient from 'socket.io-client';


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class SensorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: "",
      status: "",
      time: ""
    }
    this.socket = SocketIOClient('https://b66e8136.ngrok.io');
    this.socket.on('message', (message) => {
      debugger
      this.setState({
        name: message.name,
        value: message.value,
        status: message.status
      })

    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>sensor details component</Text>
        <Text>{this.state.name}</Text>
        <Text>{this.state.value}</Text>
        <Text>{this.state.status}</Text>
      </View>
    )
  }
}
