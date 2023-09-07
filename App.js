import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import Navigation from "./Navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    gilroyBold: require("./assets/Fonts/GilroyBold.ttf"),
    gilroyRegular: require("./assets/Fonts/GilroyRegular.ttf"),
    gilroyMedium: require("./assets/Fonts/GilroyMedium.ttf"),
    gilroySemiBold: require("./assets/Fonts/GilroySemiBold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return <Navigation />;
}
