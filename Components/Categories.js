import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* categoryCard */}
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Testing1"
      />
    </ScrollView>
  );
};

export default Categories;
