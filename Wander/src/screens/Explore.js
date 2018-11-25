import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native';

class ExploreScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPressContinue = () => {
    Navigation.push(this.props.componentId, {
        component: {
            name: 'Wander.Confirm',
            passProps: {
              activityTitle: 'Guided Backpacking Trek'
            }
        }
    })
  }

 render() {
    return (
      <View style={styles.container}>   
        <TouchableHighlight
         style={styles.continue}
         onPress={this.onPressContinue}
         underlayColor={'white'}>
            <View>
                <Image 
                    source={require('../assets/screens/Explore/Explore1.jpeg')} 
                    style={{width: 460, height: 210}}/>
                <Text style={styles.continueText}>Continue where you left off >></Text>
            </View>
        </TouchableHighlight>
        <View style={styles.activities}>
            <View style={styles.activityPanel}>
                <Text style={styles.activityPanelText}>Biking</Text>
            </View>
            <View style={styles.activityPanel}>
                <Text style={styles.activityPanelText}>Hiking</Text>
            </View>
            <View style={styles.activityPanel}>
                <Text style={styles.activityPanelText}>Skating</Text>
            </View>
            <View style={styles.activityPanel}>
                <Text style={styles.activityPanelText}>Bungee</Text>
            </View>
        </View>
        <ScrollView styles={styles.dealsContainer}>
            <View>
                <Text style={styles.dealsContainerTitle}>Adventure Packages: </Text>
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
  },
  continue: {
    flex: .7,
  },
  continueText: {
    position: 'absolute',
    top: 180,
    left: 170,
    color: 'white',
    fontStyle: 'italic',
    fontWeight: '100',
  },
  activities: {
    flex: .4,
    backgroundColor: 'black',
    flexDirection: 'row'
},
  activityPanel: {
    backgroundColor: 'white',
    width: 90,
    height: 90,
    borderRadius: 10,
    marginTop: 12,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityPanelText:{
    fontWeight: 'bold',  
  },
  dealsContainer:{
    flex: 1,
  },
  dealsContainerTitle: {
    padding: 10,
    fontWeight: 'bold'
  }
})
