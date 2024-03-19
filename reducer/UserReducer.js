import { UserActions } from "../Acton";

const initialState = {
  isLoading: false,
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActions.types.GET_USER_DATA:
      return { ...state, user: action?.payload };
    case UserActions.types.SET_IS_LOADING:
      return { ...state, isLoading: action?.payload };
    default:
      return state;
  }
};

export default userReducer;
