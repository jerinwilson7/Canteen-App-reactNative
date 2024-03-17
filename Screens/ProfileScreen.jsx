import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon, BellIcon } from "react-native-heroicons/outline";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex flex-1">
      <View className="flex-row justify-between items-center p-2">
        
        <ArrowLeftIcon
          height={30}
          width={30}
          color="#00CCBB"
          onPress={navigation.goBack}
        
        />

        <Text className="text-3xl text-center top-2 font-gilroyMedium">Profile</Text>
        <View>
            <BellIcon height={30} width={30} color="#00CCBB"/>
        </View>
     
      </View>
    </View>
  );
};

export default ProfileScreen;
