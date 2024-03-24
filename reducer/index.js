import { combineReducers } from "redux";

import GeneralReducer from "./GeneralReducer";
import CartReducer from "./CartReducer";
import userReducer from "./UserReducer";
import orderReducer from "./OrderReducer";
import productReducer from "./ProductReducer";

export default combineReducers({
  generalState: GeneralReducer,
  cartState: CartReducer,
  userState: userReducer,
  orderState: orderReducer,
  productState: productReducer,
});
