import AsyncStorage from "@react-native-async-storage/async-storage";

const setFirstTimeUse = () => {
  AsyncStorage.setItem("isFirstTimeUse", "true");
};

const getFirstTimeUse = () => {
  return AsyncStorage.getItem("isFirstTimeUse");
};
const setToken = (token) => {
  AsyncStorage.setItem("token", token);
};

const getToken = () => {
  return AsyncStorage.getItem("token");
};

export { setFirstTimeUse, getFirstTimeUse, setToken, getToken };
