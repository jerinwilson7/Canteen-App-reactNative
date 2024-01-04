import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { ArrowLeftIcon, ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { CartCard } from "../Components";

const CartScreen = () => {
  const navigation = useNavigation();

  const cart = useSelector((state) => state.cartState.cart);

  return (
    <View className="relative">
      <View className="">
        <TouchableOpacity
          className="absolute top-2 left-3 p-2 bg-gray-100 rounded-full"
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon height={30} width={30} color="#00CCBB" />
        </TouchableOpacity>
        <Text className=" top-2 text-center text-3xl font-gilroySemiBold">
          My Cart
        </Text>
      </View>
      {/* <View className="flex mx-2  pb-3  mt-5"> */}
        <ScrollView className="flex mt-8 mx-2 p-2">
          {cart &&
            cart.cartItems &&
            Array.isArray(cart.cartItems) &&
            cart.cartItems.map((item) => (
              <CartCard
                {...item?.food}
                key={item?.food?._id}
                name={item.food.name}
                foodId={item.food._id}
                imgUrl ={item.food.file}
                description = {item.food.description}
                navigate={() =>
                  navigation.navigate("Food", { foodId: item?._id })
                }
              />
            ))}
        </ScrollView>
      {/* </View> */}
    </View>
  );
};

export default CartScreen;
