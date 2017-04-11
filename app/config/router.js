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
    navigationOptions: {
      title: ({state}) => `${state.params.sensorName.toUpperCase()}`
    }
  },
  SensorDetails: {
    screen: SensorDetails,
    navigationOptions: {
      title: ({state}) => `${state.params.pacientName.toUpperCase()}`
    }
  }
});
