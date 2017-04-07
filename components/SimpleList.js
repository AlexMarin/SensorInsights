import React from 'react';
import {
  View,
  ListView,
  StyleSheet,
  Text,
  Component
} from 'react-native';

cont styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});

class SimpleList extends Component {
  constructor(props) {
    super(props)
  }

  const ds =
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <SimpleRow {...data} />}
        />
    );
  }
}

export default SimpleList;
