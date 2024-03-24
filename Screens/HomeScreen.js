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
import { BottomTab, Categories, FeaturedRow } from "../Components";
import { useNavigation } from "@react-navigation/native";



const HomeScreen = () => {

//  const products = useSelector((state)=>state.productState.product)
//  console.log(products)


  
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 pt-7 bg-white pb-24">
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
              Canteen
            </Text>
            <Text className="font-gilroySemiBold text-xl">
              Book Now
              <ChevronDownIcon size={19} color="#00CCBB" />
            </Text>
          </View>
          <View>
            <ShoppingBagIcon size={25} color="#00CCBB" 
            onPress={()=> navigation.navigate('cart')} 
             />
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

        {/* Body View */}
        <ScrollView>
          {/* Categories */}
          <Categories />
          {/* Featured Rows */}
          <FeaturedRow 
            id="123"
            title="Specials"
            description="paid placements"
            
          />
          <FeaturedRow 
            id="123"
            title="Featured"
            description="paid placements"
            
          />

          {/* Tasty discounts */}
          <FeaturedRow
            id="1234"
            title="Quick Bytes"
            description="paid placements"
          />
          {/* offers for you */}
          <FeaturedRow
            id="12345"
            title="Drinks"
            description="paid placements"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
