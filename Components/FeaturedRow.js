import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FoodCard from "./FoodCard";

const FeaturedRow = ({ id, title, description }) => {
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
        <FoodCard
          id={123}
          imgUrl="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Szechuan"
          rating={4.7}
          genre="chineese"
          address="st jons"
          short_description="good"
          dishes={[]}
          long={20}
          lat={0}
        />
        <FoodCard
          id={123}
          imgUrl="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Szechuan"
          rating={4.7}
          genre="chineese"
          address="st jons"
          short_description="good"
          dishes={[]}
          long={20}
          lat={0}
        />
        <FoodCard
          id={123}
          imgUrl="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Szechuan"
          rating={4.7}
          genre="chineese"
          address="st jons"
          short_description="good"
          dishes={[]}
          long={20}
          lat={0}
        />
        <FoodCard
          id={123}
          imgUrl="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Szechuan"
          rating={4.7}
          genre="chineese"
          address="st jons"
          short_description="good"
          dishes={[]}
          long={20}
          lat={0}
        />
        <FoodCard
          id={123}
          imgUrl="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Szechuano"
          rating={4.7}
          genre="chineese"
          address="st jons"
          short_description="good"
          dishes={[]}
          long={20}
          lat={0}
        />
        <FoodCard
          id={123}
          imgUrl="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Szechuan"
          rating={3}
          genre="chineese"
          address="st jons"
          short_description="good"
          dishes={[]}
          long={20}
          lat={0}
        />
        <FoodCard
          id={123}
          imgUrl="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Szechuan"
          rating={3}
          genre="chineese"
          address="st jons"
          short_description="good"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
