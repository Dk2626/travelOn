import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../Firebase/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiContext } from "../ApiContext/ApiContext";

const HomeScreen = () => {
  const { setIsLoggedIn } = useContext(ApiContext);

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        removeUser();
        setIsLoggedIn(false);
      })
      .catch((error) => console.log(error));
  };

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
      <TouchableOpacity onPress={() => logout()}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
