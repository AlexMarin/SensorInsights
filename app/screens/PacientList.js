import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableHighlight
} from 'react-native';

import { PacientData } from '../config/demodata';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  row: {
    padding: 5,
    backgroundColor: '#ededed'
  },
  user: {
    flex: 1,
    fontSize: 16
  },
  userStatus: {
    fontSize: 12
  }
});
export default class PacientList extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    })

    this.state = {
      dataSource: ds.cloneWithRows(PacientData)
    }
  }
  onPacientSelect = (pacientName) => {
    this.props.navigation.navigate('SensorDetails', {...pacientName});
  }
  setPacientStatus = (status) => {
    if (status) {
      return "Connected"
    } else {
      return "Disconnected"
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={
            (data) => (
              <TouchableHighlight
                onPress={() => this.onPacientSelect({pacientName: data.firstName})}>
                  <View style={styles.row}>
                    <Text style={styles.user}>{data.firstName} {data.lastName}</Text>
                    <Text style={styles.userStatus}>{this.setPacientStatus(data.connectedToSensor)}</Text>
                  </View>
              </TouchableHighlight>
            )
          }
          renderSeparator={(rowId) => <View key={rowId} style={styles.separator} />}/>
      </View>
    );
  }
}
