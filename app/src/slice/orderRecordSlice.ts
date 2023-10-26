import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import shoppingCartState from "./shoppingCartSlice";

export interface optionDataType {
  option_id: number;
  option_name: string;
  option_price: number;
}

export interface orderEntry {
  item_id?: number | null; //單點
  set_id?: number | null;
  item_name?: string | null; //單點
  set_name?: string | null;
  price?: number | null; //單點
  choices?: Array<optionDataType>; //單點
  status?: String;
  set_choices?: Array<{
    item_id: number;
    item_name: string;
    option_choices?: Array<optionDataType>;
  }>;
}
const initialState: orderRecordState = {
  orderRecord: [],
};

export interface orderRecordState {
  orderRecord: Array<orderEntry>;
}

export const orderRecordSlice = createSlice({
  name: "oderRecord",
  initialState,
  reducers: {
    add_oderRecord: (
      state: orderRecordState,
      action: PayloadAction<{ data: orderEntry[] }>
    ) => {
      state.orderRecord = action.payload.data.map((entry) => {
        return { ...entry, status: "not-completed" };
      });
    },
    toggle_status: (
      state: orderRecordState,
      action: PayloadAction<{ index: number }>
    ) => {
      state.orderRecord[action.payload.index].status =
        state.orderRecord[action.payload.index].status === "not-completed"
          ? "delivered"
          : "not-completed";
    },
    // clear_orderRecord:(state:orderRecordState)=>{
    //   item_id: null,
    //   set_id: null,
    //   item_name: null,
    //   set_name: null,
    //   price: null,
    //   choices: [],
    //   set_choices: [],
    // }
  },
});

export const { add_oderRecord,toggle_status } = orderRecordSlice.actions;
export default orderRecordSlice.reducer;
