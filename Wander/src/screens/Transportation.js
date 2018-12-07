import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'
import { Navigation } from 'react-native-navigation'

class TransportationScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPressContinue = () => {
    Navigation.push(this.props.componentId, {
            component: {
                name: 'Wander.Confirm',
                passProps: {
                },
                options:{
                    topBar:{
                        visible: true,
                        title: {
                            text: 'Confirm',
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
        <Text style={styles.header}>Transportation</Text>

        <TouchableHighlight
          onPress={this.onPressContinue}
          style={styles.continue}
          underlayColor = 'white'>
          <Text>Continue</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default TransportationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontWeight: 'bold',
    padding: 10
  },
  continue: {
    marginLeft: 120,
    marginTop: 10,
    marginRight: 120,
    height: 40,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})
