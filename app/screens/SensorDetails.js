import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class SensorDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>sensor details component</Text>

      </View>
    )
  }
}
