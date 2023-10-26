import { createAsyncThunk } from "@reduxjs/toolkit";

import { loginUser } from "./API/loginAPI";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (
    data: { username: string; staffno: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await loginUser(data);
      console.log("check thunk response", response);
      if (response) {
        return response;
      } else {
        return thunkAPI.rejectWithValue("login failed,no token");
      }
    } catch (e) {
      console.log("check error", e);
      // throw new Error("Server responded with an error");
      return thunkAPI.rejectWithValue("login failed,server error");
    }
  }
);

