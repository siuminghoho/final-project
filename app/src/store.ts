import { configureStore } from "@reduxjs/toolkit";
import { uuidReducer } from "./slice/uuidSlice";
import { authReducer } from "./slice/authSlice";
import orderRecordReducer from "./slice/orderRecordSlice";

import shoppingCartReducer from "./slice/shoppingCartSlice";

//edit by felix
// export interface IRootState{}

// const initState: IRootState = {};

// const rootReducer =(state: IRootState = initState):IRootState => {
//   return state;}

const store = configureStore({
  reducer: {
    uuid: uuidReducer,
    auth: authReducer,
    shoppingCart: shoppingCartReducer,
    orderRecord: orderRecordReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
