import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import axios from "axios";
import { server } from "@env";
import { connect } from "react-redux";
import { GeneralAction } from "../Acton";

const LogInScreen = ({ setToken }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    console.log("handle");
    if (email === "" || password === "") {
      Toast.show({
        type: "error",
        text1: "required all fields",
      });

      return;
    }
    let user = {
      email,
      password,
    };
    try {
      await axios
        .post(`http://192.168.63.203:3000/auth/login`, user)
        .then((res) => {
          Toast.show({
            type: "success",
            text1: res.data.message,
          });
          setToken(res.data);
        });
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="flex">
      {/* Header */}
      <View className="flex-shrink-0 bg-seaGreen w-full h-60 rounded-b-log">
        <View className="pt-32 pl-8">
          <Text className="text-white font-gilroyBold text-3xl">
            Hey There !
          </Text>
          <Text className="text-white font-gilroyMedium text-lg">
            Welcome back,{"\n"} continue your journey
          </Text>
        </View>
      </View>
      {/* form */}
      <View className=" flex mt-16 mx-4 space-y-4 ">
        <View className=" p-4  focus-within:shadow-lg space-x-2">
          <Text className=" text-gray-500 font-gilroySemiBold text-base">
            E-mail
          </Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            underlineColorAndroid="grey"
            keyboardType="email-address"
            className="mb-3 pb-1 pt-2"
          />
          <Text className=" text-gray-500 font-gilroySemiBold text-base">
            Password
          </Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            underlineColorAndroid="grey"
            secureTextEntry
            className="mb-3 pb-1 pt-2"
          />
          <View className="w-full">
            <TouchableOpacity
              onPress={handleSubmit}
              className="w-full rounded-2xl bg-seaGreen p-5 mt-7"
            >
              <Text className="text-xl font-gilroyBold text-center text-white">
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center">
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text className="text-sky-600">Signup </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch(GeneralAction.setToken(token)),
  };
};

export default connect(null, mapDispatchToProps)(LogInScreen);
