import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import React from "react";
import { ArrowLeftIcon, ChevronRightIcon, ShoppingCartIcon, } from "react-native-heroicons/outline";
import { TicketIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { CartCard } from "../Components";
import { useStripe } from "@stripe/stripe-react-native";
import axios from "axios";
import { server } from "../server/server";

const CartScreen = () => {
  const navigation = useNavigation();
  const stripe = useStripe();

  const cart = useSelector((state) => state.cartState.cart);

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        `${server}/payment`,
        {
          amount: Math.floor(cart.metaData.grandTotal.toFixed(2)),
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
  
      const data = response.data;
  
      // if (!response.ok) {
      //   Alert.alert('Error', JSON.stringify(data)); // Display error message
      //   return;
      // }
  
      const clientSecret = data.clientSecret;
      
  
      // Initialize PaymentSheet with merchant display name
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'Your Merchant Display Name', // Set your merchant display name here
      });

      
  
      if (initSheet.error) {
        Alert.alert('Init Sheet Error', initSheet.error.message);
        
        return;
      }
  
      // Present PaymentSheet
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret:clientSecret,
      });

      console.log('Payment response:', presentSheet);

  
      if (presentSheet.error) {
        console.log(presentSheet.error)
        Alert.alert('Present Sheet Error', presentSheet.error.message);
        return;
      }
  
      // Payment successful
      console.log('Payment successful:', presentSheet);
  
    } catch (error) {
      console.error('Handle Checkout Error:', error);
    }
  };
  

  return (
    <View className="relative">
      {/* <View className=""> */}
      
        <Text className=" top-2 text-center text-3xl font-gilroySemiBold">
          My Cart
        </Text>
        <TouchableOpacity
          className="absolute top-2 left-3 p-2  rounded-full mb-2"
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon height={30} width={30} color="#00CCBB" />
        </TouchableOpacity>
      {/* </View> */}
        <ScrollView className="flex  mt-4 ">
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
                imgUrl ={item.food.file}
                description = {item.food.description}
                navigate={() =>
                  navigation.navigate("Food", { foodId: item?._id })
                } 
              />
            ))}
      </View>
      <View className="flex flex-row items-center justify-between mt-4 border-y border-gray-400 p-2">
        <View className="flex-row space-x-3 items-center">
          <TicketIcon size={30} color="#FEAC56"/>
          <Text className="font-gilroySemiBold text-lg text-chineseBlack">Apply Coupon Code</Text>
        </View>
        <ChevronRightIcon size={30} color="#00CCBB"/>
      </View>
      <View className="flex mt-4 p-2 ">
        <View className="flex-row justify-between">
          <Text className="text-base font-interBold text-seaGreen">Gross Total</Text>
          <Text className="font-gilroySemiBold text-base">RS. {cart.metaData.itemsTotal.toFixed(2)}</Text>
        </View>
        <View className="flex-row justify-between mt-2">
          <Text className="text-base font-interBold text-seaGreen">Discount</Text>
          <Text className="font-gilroySemiBold text-lg">RS. {cart.metaData.discount.toFixed(2)}</Text>
        </View>       
      </View>
      <View className="flex-row justify-between mt-4 border-y p-3">
          <Text className="text-lg font-interBold text-seaGreen">Grand Total</Text>
          <Text className="font-gilroySemiBold text-lg">RS. {cart.metaData.grandTotal.toFixed(2)}</Text>
        </View>
        <View className="p-5">
        <TouchableOpacity className="bg-seaGreen mt-5 rounded-2xl flex items-center p-3 shadow-2xl shadow-gray-400 border-b-2 border-gray-300 mb-4 "
        onPress={handleCheckout}>
          <View className="flex-row space-x-3">
            <ShoppingCartIcon size={30} color="#FFFF"/>
            <Text className="text-white font-gilroyBold text-xl">Checkout RS. {cart.metaData.grandTotal.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
  );
};

export default CartScreen;
