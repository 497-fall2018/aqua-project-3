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


    onDealPress = () => {
        alert('deal pressed');
    }

    render(){
        return(
            <TouchableHighlight 
                style={styles.container}
                onPress={this.onDealPress}
                underlayColor={'white'}>
                <View style={styles.itemContainer}> 
                    <View style={styles.imageContainer}>
                        <Image 
                            source={require('../assets/screens/Explore/Explore1.jpeg')} 
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