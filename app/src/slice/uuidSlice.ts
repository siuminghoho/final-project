// import { createSlice } from '@reduxjs/toolkit';

// import type{PayloadAction} from '@reduxjs/toolkit';


// //export interface that can store the uuid and use in different places use redux

// export interface FoodOrderState {
//     uuid: string;
//     items: string[]; // fixed the syntax error here
//     quantity: number;
//     requirements: string;

// }

// const initialState: FoodOrderState = {
//     //hard code an exmaple here
//     uuid: "1234",
//     items: ["pizza","burger"],
//     quantity: 2,
//     requirements: "no onions"
// }

// console.log(initialState)



// export const foodOrderSlice = createSlice({
//     name: 'foodOrder',
//     initialState,
//     reducers: {
//         //add the action here
//         checkOrder: (state, action: PayloadAction<FoodOrderState>) => {
//             state.uuid = action.payload.uuid;
//             state.items = action.payload.items;
//             state.quantity = action.payload.quantity;
//             state.requirements = action.payload.requirements;
//         }
//     }
// })

// //export the action

// export const { checkOrder } = foodOrderSlice.actions;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UuidState {
    uuid: string;
}

const initialState: UuidState = {
    uuid: '', // starts with no uuid
};

export const uuidSlice = createSlice({
    name: 'uuid',
    initialState,
    reducers: {
        setUuid: (state, action: PayloadAction<string>) => {
            state.uuid = action.payload; // payload should be just the uuid string
        },
    },
});

export const uuidReducer = uuidSlice.reducer;
export const { setUuid } = uuidSlice.actions;



