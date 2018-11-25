import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    ScrollView,
    TouchableHighlight,
 } from 'react-native';

class ConfirmScreen extends Component{

    onBook = () => {
        alert("Congratulations! You're going to New Zealand! See your inbox for a confirmation and have a great journey.")
    }
    
    render(){
        return(
            <View>
                <Image 
                    style={styles.activityImage}
                    source={require('../assets/screens/Explore/Explore1.jpeg')}>
                </Image>
                <Text style={styles.activityTitle}>{this.props.activityTitle}</Text>
                <Text style={styles.activityDescription}>
                    Take a trip to the wonderful made-up-falls in New Zealand! Lorem ipsum dolor yada yada
                </Text>
                <TouchableHighlight
                    onPress={this.onBook}
                    style={styles.activityConfirm}
                    underlayColor="white">
                    <View 
                        style={styles.activityConfiram}>
                        <Text>Let's Go</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

export default ConfirmScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'whitesmoke',
    },
    activityImage: {
        height: 240,
        width: 520,
    },
    activityTitle: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },
    activityDescription:{
        padding: 10,
    },
    activityConfirm:{
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