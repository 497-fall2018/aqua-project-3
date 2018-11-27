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

import DealItem from '../components/DealItem'

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
    <View>
      <View style={styles.container}>
        <TouchableHighlight
         style={styles.continue}
         onPress={this.onPressContinue}
         underlayColor={'white'}>
            <View style={styles.continueImage}>
                <Image 
                    source={require('../assets/screens/Explore/Explore1.jpeg')} 
                    style={{width: 470, height: 210}}/>
                <Text style={styles.continueText}>Continue where you left off >></Text>
            </View>
        </TouchableHighlight>
        <View style={styles.activities}>
            <View style={[styles.activityPanel, {borderColor: 'green'}]}>
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
    </View>
    <ScrollView style={deals.container}>
        <View>
            <Text style={deals.title}>Biking Adventures: </Text>
        </View>
        {/* <View style={deals.itemContainer}> 
            <Image 
                style={deals.itemImage}
                source={require('../assets/screens/Explore/Explore2.jpg')}/>
            <Text style={deals.itemLabel}>China</Text>
        </View> */}
        <DealItem />
        <DealItem />
        <DealItem />
        <DealItem />
        <DealItem />
        <DealItem />
    </ScrollView>
      
    </View>
    )
  }
}

export default ExploreScreen;

const deals = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 320,
    },
    title: {
        fontWeight: 'bold',
        marginLeft: 10
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    itemImage: {
        width: 320,
        height: 50,
        opacity: .2,
        borderRadius: 5,
    },
    itemLabel: {
        position: 'absolute',
        top: 20,
        left: 160,
        color: 'black',
        fontWeight: 'bold',
    }
})

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
  },
  continue: {
    flex: .7,
  },
  continueImage: {
      overflow: 'hidden',
      width: 380,
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
    flex: .5,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingBottom: 15,
    width: 380,
    overflow: 'hidden',
    
  },
  activityPanel: {
    backgroundColor: 'white',
    width: 90,
    height: 90,
    borderRadius: 10,
    marginTop: 12,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'whitesmoke',
    borderWidth: 2,
  },
  activityPanelText:{
    fontWeight: 'bold',  
  },
})
