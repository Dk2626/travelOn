import React from "react";
import { Text, View } from "react-native";

const OrderScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>Order</Text>
    </View>
  );
};

export default OrderScreen;
