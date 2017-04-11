import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 12,
    alignItems: 'center'
  },
  text: {
    marginLeft: 12,
    fontSize: 16
  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'red'
  }
});

const SimpleRow = (props) => (
        <TouchableHighlight
          onPress={() => props.onSensorSelect({sensorName: props.sensorName})}>
            <View>
              <Image
                source={{uri: props.sensorImage}}
                style={styles.photo}
              />
            </View>
        </TouchableHighlight>
    );
    
export default SimpleRow;
