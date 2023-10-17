import { configureStore } from "@reduxjs/toolkit";
import { uuidReducer } from "./uuidSlice"; // assuming uuidSlice is in the same directory

const store = configureStore({
  reducer: {
    uuid: uuidReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
