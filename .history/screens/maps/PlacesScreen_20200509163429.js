import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";
import EventItem from "./../../components/EventItem";
import ModalCard from "./../../components/ModalCard";
const PlacesScreen = (props) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.screen}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Reminder</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    // textTransform: "uppercase",
    fontSize: 18,
    fontFamily: "lato",
    color: Colors.primary,
    // padding:10
  },
  textContainer: {
    height: 50,
    // flex:1,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    padding: 10,
    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "#fff",
    marginLeft: 65,
    fontFamily: "nunito-bold",
    fontSize: 20,
  },
});
PlacesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: (
      <View style={styles.title}>
        <Text style={styles.titleText}>Shops</Text>
      </View>
    ),
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "",
    },
    headerTitleStyle: {
      fontFamily: "nunito-bold",
    },
    headerBackTitleStyle: {
      fontFamily: "lato",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-search" onPress={() => {}} />
      </HeaderButtons>
    ),
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-arrow-back"
          onPress={() => {
            navData.navigation.navigate("Home");
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default PlacesScreen;
