import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import db, { auth } from "../Firebase/firebase";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignupScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passVisible, setPassVisible] = useState(true);

  const image = {
    uri: "https://images.pexels.com/photos/3295141/pexels-photo-3295141.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  };

  const signup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(`authUser`, authUser);
        storeUser(authUser.user);
      })
      .catch((error) => {
        console.log(`error`, error);
      });
  };

  const storeUser = async (user) => {
    console.log("user", user);
    try {
      let users = await AsyncStorage.setItem("User", JSON.stringify(user));
      console.log(`users`, users);
    } catch (error) {
      console.log("storeUserError", error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <ImageBackground source={image} style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            flex: 1,
            justifyContent: "center",
            padding: 20,
          }}
        >
          <View style={{ marginBottom: 60 }}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 45,
              }}
            >
              New customer ?
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                letterSpacing: 1,
                fontWeight: "bold",
              }}
            >
              We are waiting for you.
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                letterSpacing: 1,
                fontWeight: "bold",
              }}
            >
              Sign up and start a trip with us
            </Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                padding: 18,
                borderRadius: 10,
                borderBottomColor: "#b8b8b8",
                borderBottomWidth: 2,
              }}
            >
              <TextInput
                keyboardType="default"
                placeholder="Name"
                placeholderTextColor="#b8b8b8"
                color="white"
                onChangeText={(value) => {
                  setName(value);
                }}
                value={name}
              />
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                padding: 18,
                borderRadius: 10,
                borderBottomColor: "#b8b8b8",
                borderBottomWidth: 2,
              }}
            >
              <TextInput
                keyboardType="email-address"
                placeholder="Email"
                placeholderTextColor="#b8b8b8"
                color="white"
                onChangeText={(value) => {
                  setEmail(value);
                }}
                value={email}
              />
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                padding: 18,
                borderRadius: 10,
                borderBottomColor: "#b8b8b8",
                borderBottomWidth: 2,
              }}
            >
              <TextInput
                keyboardType="number-pad"
                placeholder="Number"
                placeholderTextColor="#b8b8b8"
                color="white"
                onChangeText={(value) => {
                  setNumber(value);
                }}
                value={number}
              />
            </View>
          </View>
          <View style={{ marginBottom: 60 }}>
            <View
              style={{
                padding: 18,
                borderRadius: 10,
                borderBottomColor: "#b8b8b8",
                borderBottomWidth: 2,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextInput
                keyboardType="default"
                placeholder="Password"
                placeholderTextColor="#b8b8b8"
                secureTextEntry={passVisible ? true : false}
                color="white"
                onChangeText={(value) => {
                  setPassword(value);
                }}
                value={password}
              />
              <Entypo
                onPress={() => setPassVisible(!passVisible)}
                name={!passVisible ? "eye" : "eye-with-line"}
                size={20}
                color="#b8b8b8"
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={signup}
            style={{
              padding: 18,
              alignItems: "center",
              alignSelf: "center",
              borderRadius: 10,
              marginBottom: 20,
              backgroundColor: "rgba(209, 203, 203, 0.8)",
              width: "50%",
            }}
          >
            <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
              Sign up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#b8b8b8", marginRight: 6, fontSize: 18 }}>
              Already have a account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "white", fontSize: 18 }}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default SignupScreen;
