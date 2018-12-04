import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Image,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import { Navigation } from 'react-native-navigation';



class DealItem extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    }


    // Biking: 
    //             [{title: 'Eight-Day Tour in Galway', time: '8 days', people: '1', description: "Highlights: On this eight-day tour round-trip from Galway, the routes in this rugged area of west Ireland are away from the main tourist areas, so you can really enjoy the landscape at your own pace. What's Included: Seven nights accommodation with full Irish breakfast; one evening meal; a bike rental; a guide in a support van; luggage transfers; all route details and maps; and a ferry ticket to the Aran Islands."},
    //             {title: 'Expedition in New Hampshire', time: '1 day', people: '6'},
    //             {title: 'Expedition in New Zealand', time: '1 day', people: '6'},
    //             {title: 'Expedition in New Zealand', time: '1 day', people: '6'},
    //             {title: 'Expedition in New Zealand', time: '1 day', people: '6'},
    //             {title: 'Expedition in New Zealand', time: '1 day', people: '6'},
    //             {title: 'Expedition in New Zealand', time: '1 day', people: '6'}],

    render(){
        return(
            <TouchableHighlight 
                style={styles.container}
                onPress={this.props.onDealPressed}
                underlayColor={'white'}>
                <View style={styles.itemContainer}> 
                    <View style={styles.imageContainer}>
                        <Image 
                            source={{uri: this.props.url}} 
                            style={styles.image}/>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoTextContainer}>
                            <Text style={styles.infoText}>{this.props.title}</Text>
                        </View>
                        <View style={styles.nonInfoContainer}>
                            
                        </View>
                        <View style={styles.priceTagContainer}>

                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        marginTop: 10
    },
    itemContainer:{
        borderColor: 'whitesmoke',
        borderWidth: 1,
        height: 130,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10
    },
    imageContainer: {
        overflow: 'hidden',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: 160,
        height: 130,
    },
    image: {
        height: 180,
        width: 350,
        marginLeft: -80,
    },
    infoContainer:{
        position: 'absolute',
        left: 160,
        width: 195,
        overflow: 'hidden',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        height: 130,
    },
    infoTextContainer: {
    
    },
    infoText: {
        fontWeight: 'bold',
        padding: 5,

    },
    timeAndPeopleContainer: {},
    priceTagContainer: {},
    

})

export default DealItem;