import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface shoppingCarState {
  choice_id: number;
  choice_name: string;
  choice_price: number;
}

export interface shoppingCarState {
  orderRecord: Array<{
    item_id: number | null;
    set_id: number | null;
    item_name: string | null;
    set_name: string | null;
    price: number;
    choices: Array<shoppingCarState>;
    set_choices: Array<{
      item_id: number;
      item_name: string;
      choices: Array<shoppingCarState>;
    }>;
  }>;
}

const initialState: shoppingCarState = {
  orderRecord: [],
  choice_id: 0,
  choice_name: "",
  choice_price: 0,
};

export const shoppingCarSlice = createSlice({
  name: "shoppingCar",
  initialState,
  reducers: {
    add_record: (
      state: shoppingCarState,
      action: PayloadAction<shoppingCarState["orderRecord"][0]>
    ) => {
      state.orderRecord.push(action.payload);
    },
  },
});

export const { add_record } = shoppingCarSlice.actions;
export default shoppingCarSlice.reducer;
