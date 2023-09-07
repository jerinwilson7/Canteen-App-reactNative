import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect } from "react";
import Welcome from "../assets/Constants/Welcome";
import { OnboardingCard } from "../Components";
import AppIntroSlider from "react-native-app-intro-slider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const value = await AsyncStorage.getItem("@onboarding_complete");
      // console.log(value);
      if (value != null && value === "true") {
        navigation.replace("Home");
      }
    };
    checkOnboardingStatus();
  }, []);

  const handleOnboardingComplete = async (e) => {
    await AsyncStorage.setItem("@onboarding_complete", "true");
    navigation.navigate("Home");
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
          onDone={handleOnboardingComplete}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
