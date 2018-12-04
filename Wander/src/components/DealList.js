import React, { Component } from 'react';
import {
    View,
    Text, 
    StyleSheet
} from 'react-native';

import DealItem from './DealItem';

class DealList extends Component{
    render() {
    if (this.props.adventure === 'Biking'){
            return(
                <View>
                    <View>
                        <Text>{this.props.adventure}</Text>
                    </View>
                    <View>
                        {this.props.deals.Biking.map((deal) => (
                            <DealItem 
                                title={deal.title}
                                time={deal.time}
                                people={deal.people}
                                description={deal.description}
                                key={deal.title}/>))}
                    </View>
                </View>
            )}
    else if (this.props.adventure === 'Skiing'){
        return(
            <View>
                <View>
                    <Text>{this.props.adventure}</Text>
                </View>
                <View>
                    {this.props.deals.Skiing.map((deal) => (
                        <DealItem 
                            title={deal.title}
                            time={deal.time}
                            people={deal.people}
                            description={deal.description}
                            key={deal.title}/>))}
                </View>
            </View>
        )}
    else if (this.props.adventure === 'Kayaking'){
        return(
            <View>
                <View>
                    <Text>{this.props.adventure}</Text>
                </View>
                <View>
                    {this.props.deals.Kayaking.map((deal) => (
                        <DealItem 
                            title={deal.title}
                            time={deal.time}
                            people={deal.people}
                            description={deal.description}
                            key={deal.title}/>))}
                </View>
            </View>
        )}
    else {
        return(
            <View>
                <View>
                    <Text>{this.props.adventure}</Text>
                </View>
                <View>
                    {this.props.deals.Snorkeling.map((deal) => (
                        <DealItem 
                            title={deal.title}
                            time={deal.time}
                            people={deal.people}
                            description={deal.description}
                            key={deal.title}/>))}
                </View>
            </View>
        )}
    }
}

export default DealList;