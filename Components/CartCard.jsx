import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "../Acton";
import { MinusIcon, PlusIcon } from "react-native-heroicons/outline";

const CartCard = ({ foodId, name, imgUrl, description, price }) => {
  const navigation= useNavigation();
  const dispatch = useDispatch();


 

 
  const itemQuantity = useSelector(
    (state) =>
      state.cartState.cart.cartItems.find((item) => item.food._id === foodId)
        .quantity
  );

  const addToCart = (foodId) => {
    dispatch(CartAction.addToCart({ foodId }));
  }
  
   
  const removeFromCart = (foodId) =>
    dispatch(CartAction.removeFromCart({ foodId }));
  return (
    <View className=" flex-1 flex-row items-center">
      <Image
        source={{   
          uri: imgUrl,
        }}
        alt="cartFoodImage"
        className="h-28 w-28 rounded-lg border-8"
      />

      <View className=" ml-4 mt-2">
        <Text className="text-2xl font-gilroyMedium mb-3">{name}</Text>
        <Text numberOfLines={2} className="w-60 font-gilroyMedium block">{description}</Text>
        <View className="flex-row pt-4 justify-between">
          <Text className="text-cyanGreen font-interBold text-2xl ">
            Rs.{price}/-
          </Text>
          <View className=" flex-row bg-gray-200 border-2 px-3 rounded-lg border-gray-300 items-center ">
            {itemQuantity > 0 ? (
            <>
            <MinusIcon
              size={25}
              color="#00CCBB"
              className=" "
              onPress={()=>removeFromCart(foodId)}
              // onPress={()=>removeFromCart(foodId)}
            />
            <Text className=" items-center text-lg font-interBold text-chineseBlack mx-2  ">{itemQuantity}</Text>
            </>
            ):null}
            <PlusIcon
              size={25}
              color="#00CCBB"
              onPress={(e)=>addToCart(foodId)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
