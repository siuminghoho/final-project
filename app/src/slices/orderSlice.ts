import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface OrderState {
  orderRecord: Array<{
    item_id: number | null;
    set_id: number | null;
    item_name: string | null;
    set_name: string | null;
    price: number;
    options_list_id: number | null;
    options_list_name: string | null;
  }>;
}

const initialState: OrderState = {
  orderRecord: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    add_record: (
      state: OrderState,
      action: PayloadAction<OrderState["orderRecord"][0]>
    ) => {
      state.orderRecord.push(action.payload);
    },
  },
});

export const { add_record } = orderSlice.actions;
export default orderSlice.reducer;
