import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  ImageBackground
} from "react-native";
import { Navigation } from "react-native-navigation";

export default class FlightItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightSelected: false
    };
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.setState({ flightSelected: true })}
      >
        <View style={styles.container}>
          <View
            style={
              this.state.flightSelected
                ? styles.itemContainerSelected
                : styles.itemContainer
            }
          >
            <View style={styles.flightHeader}>
              <Text style={styles.header}>
                {this.props.flight.takeoff} - {this.props.flight.destination}
              </Text>
              <Text style={{ fontSize: 18 }}>{this.props.flight.cost}</Text>
            </View>
            <View style={styles.subSection}>
              <Text style={styles.subHeader}>Time:</Text>
              <Text style={styles.subSectionText}>
                {this.props.flight.time}
              </Text>
            </View>
            <View style={styles.subSection}>
              <Text style={styles.subHeader}>Date:</Text>
              <Text style={styles.subSectionText}>
                {this.props.flight.date}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10
  },
  flightHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 36,
    alignItems: "center"
  },
  header: {
    fontSize: 30
  },
  subHeader: {
    // fontSize: 20,
    color: "#dddddd"
  },
  subSection: {
    alignItems: "center",
    height: 32,
    marginHorizontal: 36,
    flexDirection: "row"
  },
  subSectionText: {
    // fontSize: 20,
    marginHorizontal: 16
  },
  itemContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderColor: "black",
    borderWidth: 1,
    height: 130,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10
  },
  itemContainerSelected: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderColor: "green",
    borderWidth: 2,
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
