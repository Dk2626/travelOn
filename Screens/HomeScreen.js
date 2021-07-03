import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../Firebase/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem("User");
    } catch (error) {
      console.log("removeUserError", error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() =>
          auth
            .signOut()
            .then(() => {
              console.log("Signout sucees");
              removeUser();
            })
            .catch((error) => console.log(error))
        }
      >
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
