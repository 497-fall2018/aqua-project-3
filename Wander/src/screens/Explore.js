import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  ScrollView,
} from 'react-native';

class ExploreScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPressContinue = () => {
    console.log(this.props.text)
    this.props.onContinue;
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
         style={styles.continue}
         onPress={this.onPressContinue}
         underlayColor={'white'}>
            <Text>Explore</Text>
        </TouchableHighlight>
        <View style={styles.activities}>
            <Text>Activities</Text>
        </View>
        <ScrollView styles={styles.dealsContainer}>
            <View>
                <Text>deal 1</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'whitesmoke',
    paddingTop: 40,
  },
  continue: {
    flex: .6,
  },
  activities: {
    flex: .4
  },
  dealsContainer:{
    flex: 1,
  }
})
