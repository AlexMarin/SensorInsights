import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import SimpleList from '../components/SimpleList';


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    color: '#333'
  }
});

class SensorList extends Component {
  onSensorSelect = (sensorName) => {
    this.props.navigation.navigate('PacientList', {...sensorName});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Choose a sensor to monitor</Text>
        <SimpleList onSensorSelect={this.onSensorSelect}/>
      </View>
    )
  }
}
export default SensorList;
