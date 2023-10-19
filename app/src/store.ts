import { configureStore } from "@reduxjs/toolkit";
import { uuidReducer } from "./slice/uuidSlice";
import orderReducer from "./slice/orderSlice";

const store = configureStore({
  reducer: {
    uuid: uuidReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
