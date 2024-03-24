import { ProductAction } from "../Acton";

const initialState = {
  isLoading: false,
  products: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductAction.types.GET_PRODUCT_DATA:
      return { ...state, user: action?.payload };
    case ProductAction.types.SET_IS_LOADING:
      return { ...state, isLoading: action?.payload };
    default:
      return state;
  }
};

export default productReducer;
