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

  onCheckout = () => {
    alert('Thanks for booking! A confirmation email will be sent shortly.');
  }

 render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Reviewing your Order</Text>
        <TouchableHighlight
          onPress={this.onCheckout}
          style={styles.lockInButton}
          underlayColor='white'>
          <Text style={{fontWeight: 'bold'}}>Lock It In</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default ConfirmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontWeight: 'bold',
    padding: 10,
  },
  lockInButton: {
    marginLeft: 120,
    marginTop: 10,
    marginRight: 120,
    height: 40,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})
