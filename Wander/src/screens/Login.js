import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  checkFunction = () => {
    alert('yeet')
  }

  onPress = () => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
          {
              stack: {
                  children: [{
                    component: {
                      name: 'Wander.Explore',
                      passProps: {
                        text: 'This is tab 1'
                      }
                    }
                  }],
                  options: {
                    topBar:{
                      visible: false
                    },
                    bottomTab: {
                      text: 'Explore',                    
                      testID: 'FIRST_TAB_BAR_BUTTON'
                    },
                    
                  }
              },
          },
          {
              component: {
                  name: 'Wander.Search',
                  passProps: {
                    text: 'This is tab 2'
                  },
                  options: {
                    bottomTab: {
                      text: 'Search',
                      testID: 'SECOND_TAB_BAR_BUTTON'
                    }
                  }
                }
          },
          {
            stack: {
              children: [{
              component: {
                  name: 'Wander.Cart',
                  passProps: {
                    text: 'Test'
                  },
                  options: {
                    bottomTab: {
                      text: 'Cart',
                      testID: 'THIRD_TAB_BAR_BUTTON'
                    },
                    topBar:{
                      visible: false,
                  }
                  }
                }
              }]
            }
          }]
        }
      }
    });
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
         style={styles.button}
         onPress={this.onPress}
         underlayColor={'white'}
        >
         <Text>Login</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default LoginScreen;

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
