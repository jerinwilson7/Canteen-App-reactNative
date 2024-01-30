import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
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
import { PlaceOrderService, Razorpay } from "../Services";
import UserServices from "../Services/UserServices";

const CartScreen = () => {


  const navigation = useNavigation();

  const cart = useSelector((state) => state.cartState.cart);

  
  const handlePayment = async (amount) => {
    try {
      // Using await to get the result directly
      const payment = await Razorpay.razorPayPayment(amount);
      const data = payment.data;
      console.log("data:", data);
  
      // Using await to get the result directly
      const placeOrder = await PlaceOrderService.placeOrder(data);
      console.log("order:", placeOrder);
  
      if (payment.status === true) {
        navigation.navigate('Success');
      }
    
  
      
      // .then((res)=>{
    //   const data = res.data
    //   // PlaceOrderService.placeOrder(data).then((orderResponse)=>{
    //   //   console.log(orderResponse)
    //   const order =  PlaceOrderService.placeOrder(data)
    //   console.log(order)
    //    if(res.status === true){
        
    //     navigation.navigate('Success')
    //    }
    //  })
      // Handle the response as needed
    } catch (error) {
      console.log("razorpay err:", error);
      // Handle the error
    }
  };
  


  

  return (
    <View className="relative">
      <ScrollView className="flex mt-4 ">
        <Text className="text-3xl text-center top-2 font-gilroySemiBold">
          My Cart
        </Text>
        <TouchableOpacity
          className="absolute p-2 mb-2 rounded-full top-2 left-3"
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon height={30} width={30} color="#00CCBB" />
        </TouchableOpacity>
        {cart.cartItems.length > 0 ? (
          <>
          <View>
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
          <View className="flex flex-row items-center justify-between p-2 mt-4 border-gray-400 border-y">
            <View className="flex-row items-center space-x-3">
              <TicketIcon size={30} color="#FEAC56" />
              <Text className="text-lg font-gilroySemiBold text-chineseBlack">
                Apply Coupon Code
              </Text>
            </View>
            <ChevronRightIcon size={30} color="#00CCBB" />
          </View>
          <View className="flex p-2 mt-4 ">
            <View className="flex-row justify-between">
              <Text className="text-base font-interBold text-seaGreen">
                Gross Total
              </Text>
              <Text className="text-base font-gilroySemiBold">
                RS. {cart.metaData.itemsTotal.toFixed(2)}
              </Text>
            </View>
            <View className="flex-row justify-between mt-2">
              <Text className="text-base font-interBold text-seaGreen">
                Discount
              </Text>
              <Text className="text-lg font-gilroySemiBold">
                RS. {cart.metaData.discount.toFixed(2)}
              </Text>
            </View>
          </View>
          <View className="flex-row justify-between p-3 mt-4 border-y">
            <Text className="text-lg font-interBold text-seaGreen">
              Grand Total
            </Text>
            <Text className="text-lg font-gilroySemiBold">
              RS. {cart.metaData.grandTotal.toFixed(2)}
            </Text>
          </View>
          <View className="p-5">
            <TouchableOpacity
              className="flex items-center p-3 mt-5 mb-4 border-b-2 border-gray-300 shadow-xl bg-seaGreen rounded-2xl shadow-gray-400 "
              onPress={() => handlePayment(cart.metaData.grandTotal)}
            >
              <View className="flex-row space-x-3">
                <ShoppingCartIcon size={30} color="#FFFF" />
                <Text className="text-xl text-white font-gilroyBold">
                  Checkout RS. {cart.metaData.grandTotal.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          </View>
          </>
        ):(
          <View>
            <Text>
              Null
            </Text>
          </View>
        )}
        
        
      </ScrollView>
    </View>
  );
};

export default CartScreen;
