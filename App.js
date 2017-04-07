import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    return <Text>Sensors</Text>;
  }
}

const SensorInsights = StackNavigator({
  Home: { screen: HomeScreen },
});

AppRegistry.registerComponent('SensorInsights', () => SensorInsights);
