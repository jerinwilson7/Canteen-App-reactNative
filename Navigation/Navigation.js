import React, { useEffect, useLayoutEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { HomeScreen, OnboardingScreen, SignInScreen } from "../Screens";
import { TailwindProvider } from "tailwindcss-react-native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  // const navigation = useNavigation();
  // const [hasSeenOnboarding, setHasSeenOnboarding] = useState(true);

  // useEffect(() => {
  //   if (hasSeenOnboarding && navigation) {
  //     // User has seen the onboarding screen, navigate to the main screen.
  //     navigation.navigate("Home");
  //   }
  // }, [hasSeenOnboarding, navigation]);

  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          // initialRouteName={hasSeenOnboarding ? "Onboarding" : "Home"}
        >
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default Navigation;
