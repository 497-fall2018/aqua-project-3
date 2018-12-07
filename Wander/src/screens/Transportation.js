import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from "react-native";
import { Navigation } from "react-native-navigation";
import FlightItem from "../components/FlightItem";

class TransportationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      flights: {
        iceland: {
          name: "Iceland",
          takeoff: "ORD",
          destination: "GMP",
          cost: "$569.00",
          date: "12/15/18",
          time: "10:45 AM"
        },
        gmp: {
          name: "GMP",
          takeoff: "MDW",
          destination: "GMP",
          cost: "$450.00",
          date: "12/16/18",
          time: "4:40 AM"
        },
        gmp2: {
          name: "MDW",
          takeoff: "GMP",
          destination: "MDW",
          cost: "$410.00",
          date: "12/16/18",
          time: "4:40 AM"
        }
      }
    };
    this.handleFlightSelect = this.handleFlightSelect.bind(this);
  }

  onPressContinue = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "Wander.Confirm",
        passProps: {
          flight1: this.state.flights.gmp,
          flight2: this.state.flights.gmp2,
          deal: this.props.deal
        },
        options: {
          topBar: {
            visible: true,
            title: {
              text: "Confirm",
              fontSize: 18
            }
          }
        }
      }
    });
  };

  handleFlightSelect(e) {
    this.setState({ selectedFlight: e.target });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Chicago to South Korea</Text>

        <FlightItem
          handleFlightSelect={this.handleFlightSelect}
          flight={this.state.flights.iceland}
        />

        <FlightItem
          handleFlightSelect={this.handleFlightSelect}
          flight={this.state.flights.gmp}
        />

        <Text style={styles.header}>South Korea to Chicago</Text>
        <FlightItem
          handleFlightSelect={this.handleFlightSelect}
          flight={this.state.flights.gmp2}
        />
        <TouchableHighlight
          onPress={this.onPressContinue}
          style={styles.continue}
          underlayColor="white"
        >
          <Text>Continue</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default TransportationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingTop: 20,
    
  },
  continue: {
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
  }
});
