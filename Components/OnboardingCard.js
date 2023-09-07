import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";

const OnboardingCard = ({ title, content, image }) => {
  return (
    <ImageBackground
      source={{ uri: image }}
      resizeMode="cover"
      className="h-full w-screen"
    >
      <View className="flex-1 pt-5">
        {/* <Image source={{ uri: image }} className="w-full h-full" /> */}
        <View className="pt-20 pl-5 h-48 ">
          <Text className="text-seaGreen font-gilroyBold text-3xl pb-1 w-1/2">
            {title}
          </Text>
          <Text className="text-white font-gilroy-regular h-30 w-60 leading-4">
            {content}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OnboardingCard;
