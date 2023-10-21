import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface shoppingCartsState {
  choice_id: number;
  choice_name: string;
  choice_price: number;
}

export interface orderEntry {
  item_id: number | null; //單點
  set_id: number | null;
  item_name: string | null; //單點
  set_name: string | null;
  price: number; //單點
  choices: Array<shoppingCartsState>; //單點
  set_choices: Array<{
    item_id: number;
    item_name: string;
    choices: Array<shoppingCartsState>;
  }>;
}

export interface shoppingCartState {
  orderRecord: Array<orderEntry>;
}

const initialState: shoppingCartState = {
  orderRecord: [],
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    add_record: (
      state: shoppingCartState,
      action: PayloadAction<orderEntry>
    ) => {
      state.orderRecord.push(action.payload);
    },
  },
});

export const { add_record } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
