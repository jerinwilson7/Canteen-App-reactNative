import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { Store } from "./Store/Store";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import Navigation from "./Navigation/Navigation";
import { StripeProvider } from "@stripe/stripe-react-native";

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

  return (
    <Provider store={Store}>
      <StripeProvider publishableKey="pk_test_51MrFMwSBc6dGAcRgokxBwFGHP8jh6XMkSEQBcfMlnvgZ5i1v9Zn6BU1yhRmSHOw6dHJUN8jf5GimzWSAOKIoRHFb00jDHQt2ZP">
        
      <Navigation />
      </StripeProvider>
    </Provider>
  );
}
