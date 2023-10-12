import React, { useEffect, useLayoutEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { connect } from "react-redux";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  HomeScreen,
  LogInScreen,
  OnboardingScreen,
  SignInScreen,
} from "../Screens";
import { TailwindProvider } from "tailwindcss-react-native";
import Toast from "react-native-toast-message";
import { GeneralAction } from "../Acton";

const Stack = createNativeStackNavigator();

const Navigation = ({ token }) => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!token ? (
            <>
              {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
              {/* <Stack.Screen name="SignUp" component={SignInScreen} /> */}
              <Stack.Screen name="LogIn" component={LogInScreen} />
            </>
          ) : (
            <Stack.Screen name="Home" component={HomeScreen} />
          )}
        </Stack.Navigator>
        <Toast />
      </TailwindProvider>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.generalState.token,
  };
};

//when we call the connect() it returns another () in which we give navigation as parameter

export default connect(mapStateToProps)(Navigation);
