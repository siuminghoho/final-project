import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface shoppingCartsState {
  choice_id?: number;
  choice_name: string;
  choice_price?: number;
}

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
  set_choices?: Array<{
    item_id: number;
    item_name: string;
    option_choices?: Array<optionDataType>;
  }>;
}

export interface shoppingCartState {
  orderRecord: Array<orderEntry>;
  staging_area: {
    set_id: number | null;
    set_name: string | null;
    price: number | null;
    set_choices?: Array<{
      item_id: number;
      item_name: string;
      option_choices?: Array<optionDataType>;
    }>;
  };
}

const initialState: shoppingCartState = {
  orderRecord: [],
  staging_area: {
    set_id: null,
    set_name: null,
    price: null,
    set_choices: [],
  },
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    add_record: (
      state: shoppingCartState,
      action: PayloadAction<orderEntry>
    ) => {
      console.log("hihihi1");

      if (action.payload.set_id) {
        state.staging_area.set_id = action.payload.set_id;
        state.staging_area.set_name = action.payload.set_name!;
        state.staging_area.price = action.payload.price!;
      }

      if (action.payload.set_choices?.length! > 0) {
        state.staging_area.set_choices?.push({
          item_id: action.payload.set_choices![0].item_id!,
          item_name: action.payload.set_choices![0].item_name!,

          option_choices: action.payload.set_choices![0].option_choices,
        });
      }
      if (action.payload.item_id) {
        state.orderRecord.push({
          item_id: action.payload.item_id,
          item_name: action.payload.item_name,
          price: action.payload.price,
          choices: action.payload.choices!,
        });
      }

      // return state;
    },
    move_staging_area: (state: shoppingCartState) => {
      if (state.staging_area.set_id !== null)
        state.orderRecord.push(state.staging_area!);

      // state.staging_area.set_id = null;
      // state.staging_area.set_name = null;
      // state.staging_area.price = null;
      // state.staging_area.set_choices = [];
    },

    clear_staging_area: (state: shoppingCartState) => {
      state.staging_area.set_id = null;
      state.staging_area.set_name = null;
      state.staging_area.price = null;
      state.staging_area.set_choices = [];
    },
    clear_shoppingCart: (state: shoppingCartState) => {
      state.orderRecord = [];
    },
  },
});

export const {
  add_record,
  move_staging_area,
  clear_staging_area,
  clear_shoppingCart,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
