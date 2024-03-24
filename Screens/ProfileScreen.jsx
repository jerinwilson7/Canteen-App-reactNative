import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon, ArrowRightOnRectangleIcon, BellIcon, ChevronRightIcon, CreditCardIcon, FingerPrintIcon, HeartIcon, NewspaperIcon, Square3Stack3DIcon, UserCircleIcon, UserIcon, WrenchScrewdriverIcon } from "react-native-heroicons/outline";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.userState.user);
  let name = user.data.name

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

      <View className="p-3 mt-2 " >
        {/* header */}
        <View className="flex-row items-center justify-between border-b  border-gray-300 border-spacing-y-4 pb-7" > 
          <TouchableOpacity className="flex-row space-x-3 items-center">
            <UserCircleIcon size={45} color="#00CCBB"/>
            <View className="flex-col">
              <Text className="text-sm font-gilroyMedium">welcome</Text>
              <Text className="text-lg font-interMedium text-seaGreen">{name}</Text>
            </View>

          </TouchableOpacity>
          <ArrowRightOnRectangleIcon size={35} color="#00ccbb"/>
        </View>

        <View className="mt-4">
          <TouchableOpacity onPress={()=>navigation.navigate('Account')} className="flex-row items-center justify-between mt-3">
            <View className=" rounded-md p-3 flex-row space-x-5">
            <UserIcon size={30} color="#00CCBB"/>
            <Text className="font-gilroySemiBold text-xl">Account Info</Text>
            </View>
            <ChevronRightIcon size={30} color="#00CCBB"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Orders')} className="flex-row items-center justify-between mt-3">
            <View className=" rounded-md p-3 flex-row space-x-5">
            <Square3Stack3DIcon size={30} color="#00CCBB"/>
            <Text className="font-gilroySemiBold text-xl">Orders</Text>
            </View>
            <ChevronRightIcon size={30} color="#00CCBB"/>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between mt-3">
            <View className=" rounded-md p-3 flex-row space-x-5">
            <CreditCardIcon size={30} color="#00CCBB"/>
            <Text className="font-gilroySemiBold text-xl">Payments</Text>
            </View>
            <ChevronRightIcon size={30} color="#00CCBB"/>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between mt-3">
            <View className=" rounded-md p-3 flex-row space-x-5">
            <HeartIcon size={30} color="#00CCBB"/>
            <Text className="font-gilroySemiBold text-xl">WishList</Text>
            </View>
            <ChevronRightIcon size={30} color="#00CCBB"/>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between mt-3">
            <View className=" rounded-md p-3 flex-row space-x-5">
            <BellIcon size={30} color="#00CCBB"/>
            <Text className="font-gilroySemiBold text-xl">Notifications</Text>
            </View>
            <ChevronRightIcon size={30} color="#00CCBB"/>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between mt-3 ">
            <View className=" rounded-md p-3 flex-row space-x-5">
            <FingerPrintIcon size={30} color="#00CCBB" /> 
            <Text className="font-gilroySemiBold text-xl">Privacy And Policies</Text>
            </View>
            <ChevronRightIcon size={30} color="#00CCBB"/>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between mt-3 ">
            <View className=" rounded-md p-3 flex-row space-x-5">
            <NewspaperIcon size={30} color="#00CCBB"/> 
            <Text className="font-gilroySemiBold text-xl">About</Text>
            </View>
            <ChevronRightIcon size={30} color="#00CCBB"/>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between mt-3 ">
            <View className=" rounded-md p-3 flex-row space-x-5">
            <WrenchScrewdriverIcon size={30} color="#00CCBB" /> 
            <Text className="font-gilroySemiBold text-xl">Terms and  Conditions</Text>
            </View>
            <ChevronRightIcon size={30} color="#00CCBB"/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
