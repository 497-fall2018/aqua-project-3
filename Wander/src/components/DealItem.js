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

onDealPress = () => {
    alert('deal pressed')
}

class DealItem extends Component{
    render(){
        return(
            <TouchableHighlight 
                style={styles.container}
                onPress={this.onDealPress}>
                <View style={styles.itemContainer}> 
                    <View style={styles.imageContainer}>
                        <Image 
                            source={require('../assets/screens/Explore/Explore1.jpeg')} 
                            style={styles.image}/>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoTextContainer}>
                            <Text style={styles.infoText}></Text>
                        </View>
                        <View style={styles.timeAndPeopleContainer}>
                            
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
        width: '100%'
    },
    itemContainer:{
        borderColor: 'whitesmoke',
        borderWidth: 1,
        height: 130,
        marginLeft: 10,
        marginRight: 105,
        borderRadius: 10
    },
    imageContainer: {
        overflow: 'hidden',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: 180
    },
    image: {
        height: 130,
        width: 350,
        marginLeft: -60,
    },
    infoContainer:{},
    infoTextContainer: {},
    infoText: {},
    timeAndPeopleContainer: {},
    priceTagContainer: {},
    

})

export default DealItem;