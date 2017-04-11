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
  render() {
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          renderRow={
            (data) => (
              <TouchableHighlight
                onPress={() => this.onPacientSelect({pacientName: data.firstName})}>
                  <View>
                    <Text>{data.firstName}</Text>
                  </View>
              </TouchableHighlight>
            )
          }/>
      </View>
    );
  }
}
