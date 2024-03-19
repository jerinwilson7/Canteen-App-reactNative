import React, { useEffect, useLayoutEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  AccountInfo,
  CartScreen,
  FoodScreen,
  HomeScreen,
  LogInScreen,
  OnboardingScreen,
  ProfileScreen,
  SignInScreen,
  SplashScreen,
  SuccessScreen,
} from "../Screens";
import HomeTabs from './BottomTab.jsx'
import { TailwindProvider } from "tailwindcss-react-native";
import Toast from "react-native-toast-message";
import { GeneralAction } from "../Acton";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { isAppLoading, token, isFirstTimeUse } = useSelector(
    (state) => state.generalState
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GeneralAction.appStart());
  }, []);

  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAppLoading ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : !token ? (
            <>
              {isFirstTimeUse && (
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
              )}
              <Stack.Screen name="SignUp" component={SignInScreen} />
              <Stack.Screen name="LogIn" component={LogInScreen} />
            </>
          ) : (
            <>
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen name="cart" component={CartScreen} />
            <Stack.Screen name="Food" component={FoodScreen} />
            <Stack.Screen name="profile" component={ProfileScreen} />
            <Stack.Screen name="Account" component={AccountInfo} />
            <Stack.Screen name="Success" component={SuccessScreen} />
            </>
          )}
        </Stack.Navigator>
        <Toast />
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default Navigation;
