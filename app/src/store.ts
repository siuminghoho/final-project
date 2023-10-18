import { configureStore } from "@reduxjs/toolkit";
import { uuidReducer } from "./slice/uuidSlice"; 

const store = configureStore({
  reducer: {
    uuid: uuidReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
