import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'
import { Navigation } from 'react-native-navigation'

class ConfirmScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.onCheckout}>
          <Text>Confirmation</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default ConfirmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor:'whitesmoke'
  },
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})
