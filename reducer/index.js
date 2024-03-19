import { combineReducers } from "redux";

import GeneralReducer from "./GeneralReducer";
import CartReducer from "./CartReducer";
import userReducer from "./UserReducer";

export default combineReducers({
  generalState: GeneralReducer,
  cartState: CartReducer,
  userState: userReducer,
});
