import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import React from "react";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/outline";
import { TicketIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { CartCard } from "../Components";
import { RAZORPAY_KEY_ID, RAZORPAY_SECRET_KEY } from "@env";
import { Razorpay } from "../Services";


const CartScreen = () => {
  const navigation = useNavigation();

  const cart = useSelector((state) => state.cartState.cart);


  const handlePayment = (amount) => {
    console.log(amount);

    Razorpay.razorPayPayment(amount);
  };


  return (
    <View className="relative">
      {/* <View className=""> */}
      <TouchableOpacity
        className="absolute top-2 left-3 p-2  rounded-full mt-2 mb-2"
        // onPress={navigation.goBack}
      >
        <ArrowLeftIcon height={30} width={30} color="#00CCBB" />
      </TouchableOpacity>
      <Text className=" top-2 text-center text-3xl font-gilroySemiBold">
        My Cart
      </Text>
      {/* </View> */}
      <ScrollView className="flex  mt-4 ">
      
        <Text className=" top-2 text-center text-3xl font-gilroySemiBold">
          My Cart
        </Text>
        <TouchableOpacity
          className="absolute top-2 left-3 p-2  rounded-full mb-2"
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon height={30} width={30} color="#00CCBB" />
        </TouchableOpacity>
      
      <View className="mt-4">
          {cart &&
            cart.cartItems &&
            Array.isArray(cart.cartItems) &&
            cart.cartItems.map((item) => (
              <CartCard
                {...item?.food}
                key={item?.food?._id}
                name={item.food.name}
                foodId={item.food._id}
                imgUrl={item.food.file}
                description={item.food.description}
                navigate={() =>
                  navigation.navigate("Food", { foodId: item?._id })
                }
              />
            ))}
        </View>
        <View className="flex flex-row items-center justify-between mt-4 border-y border-gray-400 p-2">
          <View className="flex-row space-x-3 items-center">
            <TicketIcon size={30} color="#FEAC56" />
            <Text className="font-gilroySemiBold text-lg text-chineseBlack">
              Apply Coupon Code
            </Text>
          </View>
          <ChevronRightIcon size={30} color="#00CCBB" />
        </View>
        <View className="flex mt-4 p-2 ">
          <View className="flex-row justify-between">
            <Text className="text-base font-interBold text-seaGreen">
              Gross Total
            </Text>
            <Text className="font-gilroySemiBold text-base">
              RS. {cart.metaData.itemsTotal.toFixed(2)}
            </Text>
          </View>
          <View className="flex-row justify-between mt-2">
            <Text className="text-base font-interBold text-seaGreen">
              Discount
            </Text>
            <Text className="font-gilroySemiBold text-lg">
              RS. {cart.metaData.discount.toFixed(2)}
            </Text>
          </View>
        </View>
        <View className="flex-row justify-between mt-4 border-y p-3">
          <Text className="text-lg font-interBold text-seaGreen">
            Grand Total
          </Text>
          <Text className="font-gilroySemiBold text-lg">
            RS. {cart.metaData.grandTotal.toFixed(2)}
          </Text>
        </View>
        <View className="p-5">
          <TouchableOpacity
            className="bg-seaGreen mt-5 rounded-2xl flex items-center p-3 shadow-2xl shadow-gray-400 border-b-2 border-gray-300 mb-4 "
            onPress={() => handlePayment(cart.metaData.grandTotal)}
          >
            <View className="flex-row space-x-3">
              <ShoppingCartIcon size={30} color="#FFFF" />
              <Text className="text-white font-gilroyBold text-xl">
                Checkout RS. {cart.metaData.grandTotal.toFixed(2)}
              </Text>
            </View>
          </TouchableOpacity>
        
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;
