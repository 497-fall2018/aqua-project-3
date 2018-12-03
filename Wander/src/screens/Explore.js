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

import DealItem from '../components/DealItem';
import AdventurePanel from '../components/AdventurePanel';

// --------------------------------------------------------------------
// ------------------ EXPLORE SCREEN LIST GENERATORS ------------------
// --------------------------------------------------------------------

const AdventureList = (props) => {
    return (
    props.adventures.map((adventure) => (
        <AdventurePanel 
            label={adventure.title}
            key={adventure.title} 
            onPressPanel={props.onPressPanel}/>
    )));
}

const BikingDealList = (props) => {
    return (
        props.deals.Biking.map((deal) => (
            <DealItem 
                title={deal.title}
                time={deal.time}
                people={deal.people}
                key={deal.title}/>)));
}

const SkiingDealList = (props) => {
    return (
        props.deals.Skiing.map((deal) => (
            <DealItem 
                title={deal.title}
                time={deal.time}
                people={deal.people}
                key={deal.title}/>)));
}

// ----------------------------------------------------
// ------------------ EXPLORE SCREEN ------------------
// ----------------------------------------------------

class ExploreScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            adventures: [
                {title: 'Biking'},
                {title: 'Skiing'},
                {title: 'Kayaking'},
                {title: 'Snorkeling'},
                {title: 'Camping'},
            ],
            currAdventure: 'Biking',
            deals: {
                Biking: 
                [{title: 'Expedition in New Zealand', time: '1 day', people: '6'},
                {title: 'Expedition in New Hampshire', time: '1 day', people: '6'},
                {title: 'Expedition in New Zealand', time: '1 day', people: '6'},
                {title: 'Expedition in New Zealand', time: '1 day', people: '6'},
                {title: 'Expedition in New Zealand', time: '1 day', people: '6'},
                {title: 'Expedition in New Zealand', time: '1 day', people: '6'},
                {title: 'Expedition in New Zealand', time: '1 day', people: '6'}],
                Skiing:
                [{title: 'Skiing in Colorado', time: '3 days', people: '4'},
                {title: 'Skiing in Colorado', time: '3 days', people: '4'},
                {title: 'Skiing in Colorado', time: '3 days', people: '4'},
                {title: 'Skiing in Colorado', time: '3 days', people: '4'},
                {title: 'Skiing in Colorado', time: '3 days', people: '4'}],
                Kayaking:
                [{title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},
                {title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},
                {title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},
                {title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},
                {title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},
                {title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},
                {title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},
                {title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},],
            }
        }
    };

    onPressContinue = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'Wander.Confirm',
                passProps: {
                activityTitle: 'Guided Backpacking Trek'
                },
                options:{
                    topBar:{
                        visible: true,
                        title: {
                            text: 'Explore',
                            fontSize: 18,
                        }
                    }
                }
            }
        })
    }

    onPressPanel = () => {
        alert('hi')
    }

    render() {
    if (this.state.currAdventure === 'Biking'){ 
        return (
            <ScrollView
                stickyHeaderIndices={[1]}
                showsVerticalScrollIndicator={false}
                style={{marginTop: 20}}>
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
                </View>
                <View style={{backgroundColor: 'white'}}>                 
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={'fast'}>
                        <View style={styles.activities}>
                            <AdventureList
                                adventures={this.state.adventures}
                                onPressPanel={this.onPressPanel} />
                        </View>
                    </ScrollView>
                </View>
                <View style={deals.container}>
                    <View>
                        <Text style={deals.title}>Biking Adventures: </Text>
                    </View>
                    <View>
                        <BikingDealList 
                            deals={this.state.deals}
                            adventure='Biking'/>
                    </View>
                </View>
            </ScrollView>
        )}
        else {
            return (
                <ScrollView
                    stickyHeaderIndices={[1]}
                    showsVerticalScrollIndicator={false}
                    style={{marginTop: 20}}>
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
                    </View>
                    <View style={{backgroundColor: 'white'}}>                 
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            decelerationRate={'fast'}>
                            <View style={styles.activities}>
                                <AdventureList
                                    adventures={this.state.adventures}
                                    onPressPanel={this.onPressPanel} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={deals.container}>
                        <View>
                            <Text style={deals.title}>Biking Adventures: </Text>
                        </View>
                        <View>
                            <SkiingDealList 
                                deals={this.state.deals}
                                adventure='Biking'/>
                        </View>
                    </View>
                </ScrollView>        
        )}
    }
}

    export default ExploreScreen;

    const deals = StyleSheet.create({
        container: {
            width: '100%',
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
        marginRight: 10,
    },
})
