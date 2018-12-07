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
    this.state = { count: 0 };
  }

  onPressContinue = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "Wander.Confirm",
        passProps: {},
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

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onPressContinue}>
          <Text>Transportation</Text>
        </TouchableHighlight>
        <FlightItem
          flight={{
            name: "Iceland",
            takeoff: "ORD",
            destination: "ICN",
            cost: "$250.00"
          }}
        />
      </View>
    );
  }
}

export default TransportationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "whitesmoke"
  },
  button: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});
