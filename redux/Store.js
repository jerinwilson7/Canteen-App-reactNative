import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default Store;
