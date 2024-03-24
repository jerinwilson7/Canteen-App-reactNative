import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { OrderCard } from "../Components";
import { formatDate } from "../Services/DateServices";

const OrdersScreen = () => {
  const order = useSelector((state) => state.orderState.order);

  console.log(order.length);

  const navigation = useNavigation();
  return (
    <View className="bg-white">
      <View className="flex-row  mt-3 items-center space-x-6">
        <ChevronLeftIcon
          size={30}
          color="#00CCBB"
          onPress={navigation.goBack}
        />
        <Text className="text-xl font-gilroyMedium">My Orders</Text>
      </View>
      <ScrollView>
        {order.length > 0 ? (
          <>
            <View className="pt-5">
              {order.map((order) => (
                <View key={order._id} style={{ marginBottom: 20 }}>
                  <Text>{formatDate(order.createdAt)}</Text>
                  {order.items.map((item) => (
                    <OrderCard
                      key={item._id}
                      name={item.name}
                      foodId={item._id}
                      imgUrl={item.image}
                      price={item.price}
                      time={order.createdAt}
                      quantity={item.quantity}
                      navigate={() =>
                        navigation.navigate("Food", { foodId: item._id })
                      }
                    />
                  ))}
                </View>
              ))}
            </View>
          </>
        ) : (
          <View>
            <Text>Null</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default OrdersScreen;
