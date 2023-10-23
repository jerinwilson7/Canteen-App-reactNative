import AsyncStorage from "@react-native-async-storage/async-storage";

//for keeping the value first time use(key value)pair
const setFirstTimeUse = () => {
  // getFirstTimeUse().then((value) => {
  //   console.log("Value in AsyncStorage for isFirstTimeUse:", value);
  // });
  return AsyncStorage.setItem("isFirstTimeUse", "true");
};

const getFirstTimeUse = () => {
  return AsyncStorage.getItem("isFirstTimeUse");
};

// const setToken = (token) => {
//   console.log(token);
//   return AsyncStorage.setItem("token", token);
// };
// const setToken = (token) => {
//   const tokenString = JSON.stringify(token);
//   console.log(tokenString);
//   return AsyncStorage.setItem("token", tokenString);
// };
const setToken = (token) => {
  console.log(token);
  return AsyncStorage.setItem("token", token);
};

const getToken = () => {
  return AsyncStorage.getItem("token");
};

export default { setFirstTimeUse, getFirstTimeUse, setToken, getToken };
