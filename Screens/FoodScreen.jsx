import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

const FoodScreen = () => {

  const {params:{
    id,
    imgUrl,
    title,
    description,
    price,
    name
  }} = useRoute();
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View className="relative">
        <Image
        source={{
          uri: imgUrl
        }}
        className="w-full h-56 bg-gray-300 p-4 "
        />
        <TouchableOpacity 
        className="absolute top-5 left-3 p-2 bg-gray-100 rounded-full"
        onPress={navigation.goBack}>
          <ArrowLeftIcon height={20} width={20} color="#00CCBB"/>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default FoodScreen