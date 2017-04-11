import React, { Component } from 'react';
import {
  View,
  ListView,
  StyleSheet,
  Text
} from 'react-native';

import { SensorData } from '../config/demodata';
import SimpleRow from './SimpleRow';


const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'white'
  }
});

class SimpleList extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    })

    this.state = {
      dataSource: ds.cloneWithRows(SensorData)
    }
  }

  render() {
    return (
      <ListView
        contentContainerStyle={styles.container}
        dataSource={this.state.dataSource}
        renderRow={
          (data) => <SimpleRow {...data} onSensorSelect={this.props.onSensorSelect}/>}
        />
    );
  }
}
export default SimpleList;
