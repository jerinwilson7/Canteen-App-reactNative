import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect } from "react";
import Welcome from "../assets/Constants/Welcome";
import { OnboardingCard } from "../Components";
import AppIntroSlider from "react-native-app-intro-slider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import StorageService from "../Services/StorageService";
import { GeneralAction } from "../Acton";

const OnboardingScreen = () => {
  const dispatch = useDispatch();

  const navigate = async () => {
    try {
      await StorageService.setFirstTimeUse();
      dispatch(GeneralAction.setIsFirstTimeUse());
    } catch (error) {
      // Handle error properly, e.g., show an error message to the user
      console.error("Error setting first time use:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex flex-1 justify-center">
        <AppIntroSlider
          data={Welcome.Onboarding_Contents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <OnboardingCard {...item} />}
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          showSkipButton
          skipLabel={<Text className="text-white font-gilroyMedium">Skip</Text>}
          onDone={() => navigate()}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
