import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    ScrollView,
    TouchableHighlight,
 } from 'react-native';

class DescriptionScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            addText: 'Add to Cart',
            added: false,
            style: {
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
            },
            textStyle: {

            }
        }
    }

    addToCart = () => {
        if (this.state.added === false){
            this.setState({addText: 'Added!', added: true, textStyle: {
                color: 'green'}, 
                style: 
                    {
                        marginLeft: 120,
                        marginTop: 10,
                        marginRight: 120,
                        height: 40,
                        borderColor: 'green',
                        borderRadius: 5,
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white'
                    }
                })
        }
        else{
            this.setState({addText: 'Add to Cart', added: false, textStyle: {
                color: 'black'}, 
                style: 
                    {
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
        }
        
    }

    render(){
        return(
            <View>
                <Image 
                    style={styles.activityImage}
                    source={{uri: this.props.url}}>
                </Image>
                <Text style={styles.activityTitle}>{this.props.title}</Text>
                <Text style={styles.activityDescription}>
                    {this.props.description}
                </Text>
                <TouchableHighlight
                    onPress={this.onBook}
                    style={this.state.style}
                    underlayColor="white"
                    onPress={this.addToCart}>
                        <Text style={this.state.textStyle}>{this.state.addText}</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default DescriptionScreen;

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