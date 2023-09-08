import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 pt-7 bg-white">
      <View>
        {/* Header */}
        <View className="flex-row items-center mx-2 px-4 pb-3 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-700 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-gilroyBold text-gray-500 text-xs">
              Delivery To
            </Text>
            <Text className="font-gilroySemiBold text-xl">
              Location
              <ChevronDownIcon size={19} color="#00CCBB" />
            </Text>
          </View>
          <View>
            <ShoppingBagIcon size={25} color="#00CCBB" />
          </View>
        </View>

        {/* search */}

        <View className="flex-row mx-4 pb-2 items-center space-x-2 px-4">
          <View className="flex-row flex-1 bg-gray-200 p-2 rounded-lg focus-within:shadow-lg space-x-2 overflow-hidden">
            <MagnifyingGlassIcon size={25} color="#00CCBB" />
            <TextInput
              placeholder="Search for the item"
              keyboardType="default"
            />
          </View>
          <AdjustmentsHorizontalIcon size={25} color="#00CCBB" />
        </View>

        {/* Body */}

        <ScrollView></ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
