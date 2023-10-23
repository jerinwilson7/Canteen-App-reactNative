import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
// import {Colors, Images, Fonts} from '../contants';
// import {Display} from '../utils';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent />
      {/* <Image source={Images.PLATE} resizeMode="contain" style={styles.image} /> */}
      <Text style={styles.titleText}>FooDelivery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  //   image: {
  //     height: Display.setHeight(30),
  //     width: Display.setWidth(60),
  //   },
  titleText: {
    fontSize: 32,
  },
});

export default SplashScreen;
