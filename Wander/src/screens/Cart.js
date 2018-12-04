import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'

class CartScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    alert('pressed')
    this.props.testFunction
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
         style={styles.button}
         onPress={this.onPress}
         underlayColor={'white'}
        >
         <Text>Cart</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default CartScreen;

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