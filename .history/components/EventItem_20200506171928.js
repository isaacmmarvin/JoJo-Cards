import React from "react";
import {
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { Text } from "native-base";
import Colors from "./../constants/Colors"



const EventItem = (props) => {
  const avator = props.avatar
    ? { uri: props.avatar }
    : require("./../assets/placeholder.png");
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.month}>
          <Text>This month</Text>
        </View>
        <View style={styles.eventContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.avator} source={avator} />
          </View>
          <View style={styles.date}>
            <Text>Isaac</Text>
            <Text>May 14 1999</Text>
          </View>
          <View style={styles.days}>
            <Text>Isaac</Text>
            <Text>May 14 1999</Text>
          </View>
          <View style={styles.arrow}>
            <Ionicons
              name="ios-arrow-forward"
              size={20}
              color={Colors.primary}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    padding: 20,
  },
  eventContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 80,
    padding: 20,
    borderBottomWidth: 2,
    borderColor: "#ccc",
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#4291ee",
    alignItems: "center",
    justifyContent: "center",
  },
  avator: {
    width: "100%",
    height: "100%",
  },
  arrow: {
    position: "absolute",
    right: 10,
  },
  date: {},
  month: {
    borderBottomWidth: 2,
    borderColor: "#ccc",
    textTransform: "upperCase",
    height: 20,
    backgroundColor: "#ccc",
  },
});

export default EventItem;
