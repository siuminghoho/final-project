import { configureStore } from "@reduxjs/toolkit";
import { uuidReducer } from "./slice/uuidSlice"; 


//edit by felix
// export interface IRootState{}

// const initState: IRootState = {};

// const rootReducer =(state: IRootState = initState):IRootState => {
//   return state;}



const store = configureStore({
  reducer: {
    uuid: uuidReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
