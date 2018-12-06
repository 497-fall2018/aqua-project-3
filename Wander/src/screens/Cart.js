import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'
import { Navigation } from 'react-native-navigation'

import CartItem from '../components/CartItem';

class CartScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onCheckout = () => {
    Navigation.push(this.props.componentId, {
            component: {
                name: 'Wander.Transportation',
                passProps: {
                },
                options:{
                    topBar:{
                        visible: true,
                        title: {
                            text: 'Choose your Flight',
                            fontSize: 18,
                        }
                    }
                }
            }
        })
  }

 render() {
    return (
      <View style={styles.container}>
        <CartItem />
        <TouchableHighlight
          onPress={this.onCheckout}>
          <Text>Check Out</Text>
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
