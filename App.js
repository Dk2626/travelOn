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
import { ApiContext } from "./ApiContext/ApiContext";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(`user`, user);
  console.log(`isLoggedIn`, isLoggedIn);

  const getUser = async () => {
    try {
      let getUser = await AsyncStorage.getItem("User");
      console.log(`getUser`, getUser);
      if (getUser !== null) {
        setUser(JSON.parse(getUser));
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log("getUserError", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ApiContext.Provider value={{ setIsLoggedIn }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <>
            {isLoggedIn ? (
              <Stack.Screen name="Home" component={Tabs} />
            ) : (
              <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
              </>
            )}
          </>
        </Stack.Navigator>
      </NavigationContainer>
    </ApiContext.Provider>
  );
}
