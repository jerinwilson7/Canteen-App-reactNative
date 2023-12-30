import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ShoppingBagIcon,
  StarIcon,
} from "react-native-heroicons/outline";

const FoodScreen = () => {
  const {
    params: { id, imgUrl, title, ShortDescription, category, price, name },
  } = useRoute();

  const navigation = useNavigation();

  const [isPressed, setIsPressed] = useState(false)
  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: imgUrl,
          }}
          className="w-full h-56  p-4 "
        />
        <TouchableOpacity
          className="absolute top-5 left-3 p-2 bg-gray-100 rounded-full"
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon height={20} width={20} color="#00CCBB" />
        </TouchableOpacity>
          <View className="ml-5 mt-4 pl-2 border border-gray-500 rounded-md  w-20 bg-gray-200 ">
            <Text className="text-sm text-gray-500  ">{title}</Text>
          </View>
          <View className="mt-4 ml-5">
            <Text className="text-4xl font-gilroySemiBold block text-gray-600">
              {name}
            </Text>
          </View>
          <View className="flex-row items-center space-x-2 ml-5">
            <StarIcon color="green" size={22} opacity={0.5} />
            <Text className="text-sm text-gray-500">
              <Text className="text-green-500">{4}</Text>
              <Text className="text-green-500 "> . </Text>
              {name} . {category}
            </Text>
          </View>
          <View className="mt-4 p-2 border-b border-gray-200 ">
            <Text className="text-sm block font-interRegular">
              {ShortDescription}
            </Text>
        </View>
        <View>
        <Text className="mt-4 px-4 text-2xl font-gilroySemiBold text-chineseBlack">Price RS. {price}</Text>
        </View>
        <View className=" flex flex-row justify-center ">
          <TouchableOpacity className="bg-cyanGreen rounded-lg shadow-md ">
            <Text className="text-2xl p-3 font-gilroyMedium text-white">
              Add To Basket
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default FoodScreen;
