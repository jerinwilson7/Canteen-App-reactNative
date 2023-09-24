import React, { useEffect, useLayoutEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  HomeScreen,
  LogInScreen,
  OnboardingScreen,
  SignInScreen,
} from "../Screens";
import { TailwindProvider } from "tailwindcss-react-native";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />*/}
          <Stack.Screen name="SignUp" component={SignInScreen} />
          <Stack.Screen name="LogIn" component={LogInScreen} />
        </Stack.Navigator>
        <Toast />
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default Navigation;
