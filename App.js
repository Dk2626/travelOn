import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen";
import Tabs from "./Navigator/Tabs";
import SignupScreen from "./Screens/SignupScreen";
import { auth } from "./Firebase/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  console.log(`user`, user);

  const getUser = async () => {
    try {
      let users = await AsyncStorage.getItem("User");
      if (users !== null) {
        setUser(JSON.parse(users));
      }
    } catch (error) {
      console.log("getUserError", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <>
          {!user ? (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
            </>
          ) : (
            <Stack.Screen name="Home" component={Tabs} />
          )}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
