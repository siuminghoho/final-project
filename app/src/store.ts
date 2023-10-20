import { configureStore } from "@reduxjs/toolkit";
import { uuidReducer } from "./slice/uuidSlice";
import shoppingCarReducer from "./slice/shoppingCarSlice";

const store = configureStore({
  reducer: {
    uuid: uuidReducer,
    order: shoppingCarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
