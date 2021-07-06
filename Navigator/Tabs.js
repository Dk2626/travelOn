import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import OrderScreen from "../Screens/OrderScreen";
import PaymentScreen from "../Screens/PaymentScreen";
import AccountScreen from "../Screens/AccountScreen";
import { FontAwesome, Ionicons, FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="ios-home"
                size={24}
                color={focused ? "#12B0E8" : "#758283"}
              />
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="document-attach-outline"
                size={24}
                color={focused ? "#12B0E8" : "#758283"}
              />
            );
          },
        }}
        name="Order"
        component={OrderScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="wallet-outline"
                size={24}
                color={focused ? "#12B0E8" : "#758283"}
              />
            );
          },
        }}
        name="Payment"
        component={PaymentScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="person-outline"
                size={24}
                color={focused ? "#12B0E8" : "#758283"}
              />
            );
          },
        }}
        name="Account"
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
