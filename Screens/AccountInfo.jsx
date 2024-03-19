import { View, Text } from 'react-native'
import React from 'react'
import { CheckBadgeIcon, ChevronLeftIcon } from 'react-native-heroicons/outline'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const AccountInfo = () => {
    const navigation = useNavigation();
    const user = useSelector((state)=>state.userState.user)
    let name = user.data.name
    let email = user.data.email
  return (
    <View className="p-3">
        <View className="flex-row  mt-3 items-center space-x-6">
        <ChevronLeftIcon size={30} color="#00CCBB" onPress={navigation.goBack}/>
      <Text className="text-xl font-gilroyMedium">Account Info</Text>
        </View>
        <View className="mt-7">
        <View className=" flex-row items-end justify-between border-b-2 border-gray-200 pb-5">
            <View className="space-y-3">
            <Text className="font-interMedium text-sm ">Username</Text>
            <Text className="font-semibold text-lg pl-2">{name}</Text>
            </View>
            <CheckBadgeIcon size={30} color="#37BD6B"/>
        </View>
        <View className="pt-5">
        <View className=" flex-row items-end justify-between border-b-2 border-gray-200 pb-5">
            <View className="space-y-3">
            <Text className="font-interMedium text-sm ">Email Address</Text>
            <Text className="font-semibold text-lg pl-2">{email}</Text>
            </View>
            <CheckBadgeIcon size={30} color="#37BD6B"/>
        </View>
        </View>
        </View>
    </View>
  )
}

export default AccountInfo