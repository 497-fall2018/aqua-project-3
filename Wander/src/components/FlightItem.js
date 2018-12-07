import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  ImageBackground
} from "react-native";
import { Navigation } from "react-native-navigation";

export default class FlightItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text>
            {this.props.flight.takeoff} ---- {this.props.flight.destination}
          </Text>
          <Text>Cost: </Text>
          <Text>{this.props.flight.cost}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10
  },
  itemContainer: {
    borderColor: "black",
    borderWidth: 1,
    height: 130,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10
  },
  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 160,
    height: 130
  },
  image: {
    height: 180,
    width: 350,
    marginLeft: -80
  },
  infoContainer: {
    position: "absolute",
    left: 160,
    width: 195,
    overflow: "hidden",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    height: 130
  },
  infoTextContainer: {},
  infoText: {
    fontWeight: "bold",
    padding: 5,
    paddingRight: 10
  },
  timeAndPeopleContainer: {},
  priceTagContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  priceTag: {
    fontSize: 18
  }
});

// export default FlightItem;
