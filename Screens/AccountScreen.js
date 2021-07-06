import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { auth } from "../Firebase/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiContext } from "../ApiContext/ApiContext";

const AccountScreen = () => {
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
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>Account</Text>
      <TouchableOpacity onPress={() => logout()}>
        <Text style={{ color: "white" }}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;
