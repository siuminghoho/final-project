<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import {uuidReducer} from "./uuidSlice"; // assuming uuidSlice is in the same directory
=======
import { configureStore } from "@reduxjs/toolkit";
import { uuidReducer } from "./uuidSlice"; // assuming uuidSlice is in the same directory
>>>>>>> b70fa5e153d593031aeb90ba83981e703a5d6649

const store = configureStore({
  reducer: {
    uuid: uuidReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
