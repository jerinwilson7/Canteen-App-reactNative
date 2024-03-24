import { OrderAction } from "../Acton";

const initialState = {
  isLoading: false,
  order: {},
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case OrderAction.types.GET_ORDER_DATA:
      return { ...state, order: action?.payload };
    case OrderAction.types.SET_IS_LOADING:
      return { ...state, isLoading: action?.payload };
    default:
      return state;
  }
};

export default orderReducer;
