import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>Home</Text>
    </View>
  );
};

export default HomeScreen;
