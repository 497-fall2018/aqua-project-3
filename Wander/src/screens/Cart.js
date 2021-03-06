import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from "react-native";
import { Navigation } from "react-native-navigation";

import CartItem from "../components/CartItem";
import DealItem from "../components/DealItem";

class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deal: {
        source:
          "http://www.antiquealive.com/Korea_Tour/images/skihomeImg01.jpg",
        title: "Snowboarding down South Korean Mountains",
        time: "1 day1",
        people: "1",
        price: 1888,
        description:
          "Alpensia Ski Resort is tucked away in the mountains at about 700 meters above sea level and is known for its excellent snow. The resort offers six slopes with various courses for beginner, intermediate and advanced skiers and can accommodate up to 3,000 people at the same time. Snowboarding slopes and a long-distance sledding slope are specially designed for snowboarders and visitors with family respectively."
      }
    };
  }

  onCheckout = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "Wander.Transportation",
        passProps: {
          deal: this.state.deal
        },
        options: {
          topBar: {
            visible: true,
            title: {
              text: "Flights",
              fontSize: 18
            }
          }
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Your Cart: </Text>

        <DealItem
          title={this.state.deal.title}
          time={this.state.deal.time}
          people={this.state.deal.people}
          description={this.state.deal.description}
          url={this.state.deal.source}
          price={this.state.deal.price}
          key={this.state.deal.title}
        />

        <TouchableHighlight
          onPress={this.onCheckout}
          style={styles.checkoutContainer}
          underlayColor="white"
        >
          <Text style={styles.checkout}>Find Flights</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  },
  header: {
    marginLeft: 10,
    fontWeight: "bold"
  },
  checkoutContainer: {
    marginLeft: 120,
    marginTop: 10,
    marginRight: 120,
    height: 40,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  checkout: {}
});
