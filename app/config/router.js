import React from 'react';
import { StackNavigator } from 'react-navigation';

import SensorList from '../screens/SensorList';
import SensorDetails from '../screens/SensorDetails';
import PacientList from '../screens/PacientList';

export const AppNav = StackNavigator({
  SensorList: {
    screen: SensorList,
    navigationOptions: {
      title: "Welcome"
    }
  },
  PacientList: {
    screen: PacientList,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.sensorName.toUpperCase()}`
    })
  },
  SensorDetails: {
    screen: SensorDetails,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.pacientName.toUpperCase()}`
    })
  }
});
