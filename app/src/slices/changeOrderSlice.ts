import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface changeOrderState {
    uuid: string;
    items: string[];
    quantity: number;
    requirements: {[key: string]: string}; 

}

//make 3 button that will change the state of the order , add , edit and delete

