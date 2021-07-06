import React from "react";
import { Text, View } from "react-native";

const PaymentScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>Payment</Text>
    </View>
  );
};

export default PaymentScreen;
