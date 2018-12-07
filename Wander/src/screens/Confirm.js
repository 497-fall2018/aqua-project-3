import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from "react-native";
import { Navigation } from "react-native-navigation";
import DealItem from "../components/DealItem";
import FlightItem from "../components/FlightItem";

class ConfirmScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onCheckout = () => {
    alert("Thanks for booking! A confirmation email will be sent shortly.");
  };

  render() {
    let total =
      parseInt(this.props.deal.price) + parseInt(this.props.flight.cost);
    total = total.toString();
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Reviewing your Order</Text>
        <Text style={styles.subHeader}>Deal</Text>
        <DealItem
          title={this.props.deal.title}
          time={this.props.deal.time}
          people={this.props.deal.people}
          description={this.props.deal.description}
          url={this.props.deal.source}
          price={this.props.deal.price}
          key={this.props.deal.title}
        />
        <Text style={styles.subHeader}>Flight</Text>
        <FlightItem flight={this.props.flight} />

        <View>
          <Text style={styles.total}>Total: $2338</Text>
        </View>
        <TouchableHighlight
          onPress={this.onCheckout}
          style={styles.lockInButton}
          underlayColor="white"
        >
          <Text style={{ fontWeight: "bold" }}>Lock It In</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ConfirmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontWeight: "bold",
    padding: 10
  },
  subHeader: {
    fontSize: 24,
    color: "#d1d1d1",
    marginHorizontal: 24,
    marginTop: 16
  },
  total: {
    marginHorizontal: 24,
    fontSize: 24,
    fontWeight: "500",
    marginTop: 16
  },
  lockInButton: {
    marginLeft: 120,
    marginTop: 16,
    marginRight: 120,
    height: 40,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  }
});
