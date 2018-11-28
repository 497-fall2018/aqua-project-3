import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
} from 'react-native';
import { Navigation } from 'react-native-navigation'

class AdventurePanel extends Component{
    render(){
        return(
            <View style={[styles.activityPanel]}>
                <Text style={styles.activityPanelText}>{this.props.label}</Text>
            </View>
        )
    }
}

styles = StyleSheet.create({
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

export default AdventurePanel;