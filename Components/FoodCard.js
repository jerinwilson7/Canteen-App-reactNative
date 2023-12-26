import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const FoodCard = ({
  id,
  imgUrl,
  title,
  description,
  price,
  rating,
  genre,
  name
 

}) => {
  const navigation =useNavigation();
  return (

    <TouchableOpacity className="mr-2 bg-white shadow" onPress={()=>navigation.navigate('Food',{
      id,
      imgUrl,
      title,
      description,
      price,
      name
    })}>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64"
        
       />
      <View className="pb-4 px-3">
        <Text className="pt-2 font-bold text-lg">{name}</Text>
        <View className="flex-row items-center space-x-2">
          <StarIcon color="green" size={22} opacity={0.5} />
          <Text className="text-sm text-gray-500"> 
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>
      </View>
      
    </TouchableOpacity>
  );
};

export default FoodCard;
