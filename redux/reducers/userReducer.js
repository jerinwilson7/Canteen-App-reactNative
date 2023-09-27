import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: false,
};

export const userReducer = createReducer(initialState, {
  userRegisterRequest: (state) => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  userRegisterSuccess: (state) => {
    (state.loading = false), (state.isAuthenticated = true);
  },
});
