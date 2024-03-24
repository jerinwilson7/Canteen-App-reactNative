import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { formatDateTime } from "../Services/DateServices";

const OrderCard = ({ foodId, name, imgUrl, quantity, price,time }) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View className="p-4 flex rounded-2xl  border-b-2 border-white shadow-xl">
      <View className="flex-row ">
        <Image
          source={{
            uri: imgUrl,
          }}
          alt="cartFoodImage"
          className="h-28 w-28 rounded-lg border-8"
        />
        <View className="flex-row flex-1 justify-between pt-3">
        <View className="pl-4 space-y-4 ">
      <Text className=" font-gilroySemiBold text-xl">{name}</Text>
      <Text className="text-sm font-interRegular text-gray-500">{formatDateTime(time)}</Text>
        </View>
        <Text className="text-xl font-gilroySemiBold text-seaGreen right-2
        ">RS {price}.00</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default OrderCard;
