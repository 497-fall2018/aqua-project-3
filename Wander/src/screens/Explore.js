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
            onPressPanel={() => props.onPressPanel(adventure.title)}/>
    )));
}

const BikingDealList = (props) => {
    return (
        props.deals.Biking.map((deal) => (
            <DealItem 
                title={deal.title}
                time={deal.time}
                people={deal.people}
                description={deal.description}
                url={deal.source}
                onDealPressed={() => props.onDealPressed(deal)}
                key={deal.title}/>)));
}

const SkiingDealList = (props) => {
    return (
        props.deals.Skiing.map((deal) => (
            <DealItem 
                title={deal.title}
                time={deal.time}
                people={deal.people}
                url={deal.source}
                key={deal.title}/>)));
}

const KayakingDealList = (props) => {
    return (
        props.deals.Kayaking.map((deal) => (
            <DealItem 
                title={deal.title}
                time={deal.time}
                people={deal.people}
                url={deal.source}
                key={deal.title}/>)));
}

const SnorkelingDealList = (props) => {
    return (
        props.deals.Snorkeling.map((deal) => (
            <DealItem 
                title={deal.title}
                time={deal.time}
                people={deal.people}
                url={deal.source}
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
            currAdventureTitle: 'Biking',
            deals: {

                Biking: 
                [{source: "https://slack-imgs.com/?c=1&url=https%3A%2F%2Fwww.frommers.com%2Fsystem%2Fmedia_items%2Fattachments%2F000%2F807%2F877%2Fs500%2F0817-36558.jpg", 
                    title: 'Eight-Day Tour in Galway', 
                    time: '8 days', 
                    people: '1', 
                    description: "Highlights: On this eight-day tour round-trip from Galway, the routes in this rugged area of west Ireland are away from the main tourist areas, so you can really enjoy the landscape at your own pace. \n \nWhat's Included: Seven nights accommodation with full Irish breakfast; one evening meal; a bike rental; a guide in a support van; luggage transfers; all route details and maps; and a ferry ticket to the Aran Islands."},
                {source: "https://gosojourn.com/wp-content/uploads/2018/11/ps.jpg", 
                    title: 'Expedition in New Hampshire',
                    time: '1 day', 
                    people: '4'},
                {source: "https://backroads-web.s3.amazonaws.com/images/search/thumbnail/dolomites-bike-tour.jpg",
                    title: 'Valley Excursion in Italy and Austria', 
                    time: '2 day', 
                    people: '1-10', 
                    description: "A surprise awaits on Italy's rooftop: a network of quiet cycling paths for everyone's taste. From Italy to Austria, pedal amid lush valleys and limestone massifs. Connect with local people whose unique traditions enhance your journey. Savor exquisite meals, regional wines and cozy inns and be welcomed like family."},
                {source: "https://backroads-web.s3.amazonaws.com/images/search/thumbnail/piedmont-bike-tour.jpg", 
                    title: 'Bike and Wine in Italy', 
                    time: '1-3 day', 
                    people: '1-5', 
                    description: "Between the Alps and the Mediterranean. The benchmark for Italian wines. And land of the Slow Food Movement. You're in Piedmont, a place of richness. With every meal, a delight. Every stay, decadent. Perhaps you never considered Piedmont with all that Italy has to offer. But when you're this close to the Alps, your experience can't get much higher."},
                {source: "https://backroads-web.s3.amazonaws.com/images/search/thumbnail/chablis-burgundy-bike-tour.jpg", 
                    title: 'Vineyard Voyage in Burgundy', 
                    time: '1 day', 
                    people: '2-4', 
                    description: "There's a special flavor here. A blend of excellence and tradition. Yes, it's in the wine, but it transcends everything. It's in the gracious demeanor of the people. It's in villages that sit quietly among the vineyards. You feel Burgundy's rich flavors as you ride toward the colorful tile roofs in Beaune. And you quickly understand that the wine is only where Burgundy's story begins."},
                {source: "https://backroads-web.s3.amazonaws.com/images/search/thumbnail/french-pyrenees-rioja-bike-tour.jpg", 
                    title: 'Mountain Biking in Basque Country', 
                    time: '1-2 day', 
                    people: '1', 
                    description: "A unique corner of Europe unlike any other. Part French, part Spanish, a warm and proud people with a history and identity all their own. Tranquil mountain villages, the capital of the French Basque Country, bold Rioja wines and world-class biking from the majestic Pyrenees to the sun-drenched Atlantic coast."},
                {source: "https://backroads-web.s3.amazonaws.com/images/search/thumbnail/andalucia-bike-tour.jpg", 
                    title: 'Exploration in Southern Spain\'s Andalucia', 
                    time: '1 day', 
                    people: '1', 
                    description: "Flamenco to fiestas, gazpacho to tapas, bodegas to bullrings—the essence of Spain is found in Andalucía. In the remote expanses of this long-ago Moorish stronghold, every mountain peak and whitewashed village tells a story. We'll take you inside and reveal their secrets. Biking in Andalucía with Backroads—quintessentially wonderful!"}],

                Skiing:
                [{source: "https://static.rootsrated.com/image/upload/s--O9wLqHve--/t_rr_large_traditional/fwptrbz1uyenhkwzmman.jpg", 
                    title: 'Slope down Shames Mountain in British Columbia', 
                    time: '1-3 days', 
                    people: '1-6',
                    description: "Skiing around Shames is one of a kind with unreal amount of snow, great terrain and friendly locals.  Shames Mountain has 28 cut runs and an abundance of natural glades. Its a family friendly mountain with lots of great options from beginner to expert. Shames is surrounded by more than 7,800 acres of backcountry bliss."},
                {source: "https://cdn.images.express.co.uk/img/dynamic/133/590x/skiing-St-Anton-Austria-travel-destination-770510.jpg",
                    title: 'Skiing in St. Anton, Austria', 
                    time: '1-2 days', 
                    people: '1-6',
                    description: "Arlberg has always been famous for its beauty, reliable snow extending right down to the villages and the excellent condition of its slopes. A total of 88 of state-of-the-art cable cars and lifts offer the highest standard of safety and comfort. Superbly prepared slopes for all ability levels, and challenging steep slopes and deep-snow ski runs, snowboard fun parks, carving areas, permanent racing circuits and numerous cozy meeting places ensure variety and enjoyment."},
                {source: "http://www.antiquealive.com/Korea_Tour/images/skihomeImg01.jpg",
                    title: 'Snowboarding down South Korean Mountains', 
                    time: '1 day1', 
                    people: '1',
                    description: "Alpensia Ski Resort is tucked away in the mountains at about 700 meters above sea level and is known for its excellent snow. The resort offers six slopes with various courses for beginner, intermediate and advanced skiers and can accommodate up to 3,000 people at the same time. Snowboarding slopes and a long-distance sledding slope are specially designed for snowboarders and visitors with family respectively."},
                
                {source: "https://visitidaho.org/content/uploads/2016/10/skiing-silver-mountain-resort-kellogg_25863149560_o-700x467.jpg",
                    title: '6-Day Ski Expedition in France & Switzerland', 
                    time: '6 days', 
                    people: '4',
                    description: "In the heart of the Alps, the Haute Route is a classic six-day traverse across mountains and glaciers from France's Chamonix to Switzerland's Zermatt. You'll not only get personal with such stunning peaks as Rosa Blanche and Pigne d'Arolla, but you'll also get views of Europe's tallest mountain, Mont Blanc, from all kinds of angles only a backcountry skier could see."},
                {source: "https://cdn.cnn.com/cnnnext/dam/assets/160105172044-ski-resorts-01-kitzbuhel-super-169.jpg",
                    title: 'Cross Country Ski in Wapta Traverse', 
                    time: '4-6 days', 
                    people: '1-8',
                    description: "A hut-based route across the Wapta and Waputik Icefields and over the Glaciated Continental Divide, this alpine traverse goes through Banff National Park and the majestic Canadian Rockies. The classic traverse, rated intermediate, going from Bow Lake to Sherbrooke Lake, will take you four days, but a six-day option, starting at Peyto Lake and finishing at Sherbrooke Lake, exists for more experienced skiers."},
                {source: "https://ski-resort-stats.com/wp-content/uploads/2017/09/ski-resorts-in-canada.jpeg",
                    title: "Tour Colorado's Sneffels Range",
                    time: "1-2 days",
                    people: "1-6",
                    description: "Create your own expedition under the epic 14,000-foot alpine peaks that define the Sneffels Range, home to three of Colorado's 100 highest mountains. The San Juan Hut System links Telluride to Ouray via an intermediate route, which varies from three to eight hours between huts, while advanced, expert and extreme terrain can be found above each hut."}],
                Kayaking:
                [{title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},
                {title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},
                {title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},
                {title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},
                {title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},
                {title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},
                {title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},
                {title: 'Kayaking in Puerto Rico', time: '1 day', people: '4'},],
                Snorkeling:
                [{title: 'Snorkeling in Puerto Rico', time: '1 day', people: '4'},
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
                name: 'Wander.Description',
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

    onDealPressed = (deal) => {
        let title = deal.title;
        let description = deal.description;
        let time = deal.time;
        let people = deal.people;
        let source = deal.source;

        Navigation.push(this.props.componentId, {
            component: {
                name: 'Wander.Description',
                passProps: {
                    title: title,
                    description: description,
                    time: time,
                    people: people,
                    url: source,
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

    onPressPanel = (title) => {
        this.setState({currAdventureTitle: title})
    }

    render() {
    if (this.state.currAdventureTitle === 'Biking'){ 
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
                            adventure='Biking'
                            onDealPressed={this.onDealPressed}/>
                    </View>
                </View>
            </ScrollView>
        )}
    else if (this.state.currAdventureTitle === 'Skiing') {
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
                            <Text style={deals.title}>Skiing Adventures: </Text>
                        </View>
                        <View>
                            <SkiingDealList 
                                deals={this.state.deals}
                                adventure='Skiing'/>
                        </View>
                    </View>
                </ScrollView>        
        )}
    else if (this.state.currAdventureTitle === 'Kayaking') {
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
                        <Text style={deals.title}>Kayaking Adventures: </Text>
                    </View>
                    <View>
                        <KayakingDealList 
                            deals={this.state.deals}
                            adventure='Kayaking'/>
                    </View>
                </View>
            </ScrollView>) 
        }
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
                        <Text style={deals.title}>Snorkeling Adventures: </Text>
                    </View>
                    <View>
                        <SnorkelingDealList 
                            deals={this.state.deals}
                            adventure='Biking'/>
                    </View>
                </View>
            </ScrollView>)
    }
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
