import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const AddNewBirthdayScreen = (props) => {
  const avator = require("./../assets/placeholder.png");
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={styles.avator} source={avator} />
      </View>
      <View style={styles.inputs}></View>
      <View style={styles.options}></View>
    </View>
  );
};

const styles = StyleSheet.create({
    screen:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        flex:1
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
});

AddNewBirthdayScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Add New Birthdays",
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
        <Item title="Menu" iconName="ios-checkmark" onPress={() => {}} />
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

export default AddNewBirthdayScreen;
