import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FoodCard from "./FoodCard";
import axios from "axios";
import { server } from "../server/server";

const FeaturedRow = ({ id, title, description }) => {
  useEffect(() => {
  fetchFoods();
  }, [])

  const [foodList, setFoodList] = useState([])

  const fetchFoods = async()=>{

  const response =  await axios.get(`${server}/admin/get-all-products`)
  setFoodList(response.data)

  }
  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="text-lg font-bold">{title}</Text>
       

        <ArrowRightIcon color="#00CCBB" />
  
      </View>
      <Text className="text-xs px-4 text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* FoodCards */}
        {foodList?.map((food)=>(

        <FoodCard key={food._id}
          id={food._id}
          imgUrl={food.file}
          name = {food.name}
          title={food.title}
          price ={food.price}
          quantity = {food.quantity}
          ShortDescription={food.description}
          category={food.category}
          // rating={4.7}
          genre={food.category}
        
          
        />
        ))}
        
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
