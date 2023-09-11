import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const SignInScreen = () => {
  return (
    <View className="flex">
      {/* Header */}
      <View className="flex-shrink-0 bg-seaGreen w-full h-60 rounded-b-log">
        <View className="pt-32 pl-8">
          <Text className="text-white font-gilroyBold text-3xl">Welcome !</Text>
          <Text className="text-white font-gilroyMedium text-lg">
            Create Your Account
          </Text>
        </View>
        {/* form */}
        <View className=" flex mt-16 ">
          <View className=" p-4 focus-within:shadow-lg space-x-2">
            <Text className=" text-gray-500 font-gilroySemiBold text-base">
              e-mail
            </Text>
            <TextInput
              underlineColorAndroid="grey"
              keyboardType="email-address"
              className="mb-3 pb-1 pt-2"
            />
            <Text className=" text-gray-500 font-gilroySemiBold text-base">
              Password
            </Text>
            <TextInput
              underlineColorAndroid="grey"
              secureTextEntry
              className="mb-3 pb-1 pt-2"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
