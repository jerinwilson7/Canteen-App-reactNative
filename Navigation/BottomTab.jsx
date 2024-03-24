import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import {  CartScreen, OrdersScreen, ProfileScreen, SuccessScreen } from "../Screens";
import { HomeIcon, QueueListIcon, ShoppingBagIcon, Square3Stack3DIcon, UserIcon } from "react-native-heroicons/outline";

const bottomTabs = createBottomTabNavigator();

export default () => (
  <bottomTabs.Navigator screenOptions={{ headerShown: false ,
    tabBarStyle: {
      position: 'relative',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height: 50,
      backgroundColor: "#fafcfc",
      borderTopWidth: 0,
    },
    tabBarShowLabel:false,
    tabBarActiveTintColor:"#00CCBB",
    tabBarInactiveTintColor:"#6A6D7C"
    
    }}>
    <bottomTabs.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => <HomeIcon size={25} color={color} />,
      }}
    />

<bottomTabs.Screen
      name="cart"
      component={CartScreen}
      options={{ 
        tabBarIcon: ({ color }) => <ShoppingBagIcon size={25} color={color} />,
      }}
    />

<bottomTabs.Screen
      name="Orders"
      component={OrdersScreen}
      options={{
        tabBarIcon: ({ color }) => <Square3Stack3DIcon size={25} color={color} />,
      }}
    />

<bottomTabs.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color }) => <UserIcon size={25} color={color} />,
      }}
    />



   
   
  </bottomTabs.Navigator>
);
 