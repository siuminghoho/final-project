import {
  createSlice,
  PayloadAction,
  isPending,
  isFulfilled,
  isRejected,
} from "@reduxjs/toolkit";
import { loginAsync } from "../authAsyncThunk"; // Ensure correct path

// import { loginUser } from "../API/loginAPI";

interface AuthState {
  isAuthenticated: boolean;
  adminId: string | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  // Initial check for token in localStorage
  isAuthenticated: localStorage.getItem("token") !== null,
  adminId: null,
  token: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(
      state,
      action: PayloadAction<{ adminId: string; token: string }>
    ) {
      const { token, adminId } = action.payload;

      state.isAuthenticated = true;
      state.adminId = adminId;
      state.token = token;
      localStorage.setItem("token", token); // Storing in localStorage
      localStorage.setItem("adminId", adminId); // Storing in localStorage
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isAuthenticated = false;
      state.adminId = null;
      state.token = null;
      state.error = action.payload;
      localStorage.removeItem("token"); // Ensure to clear localStorage
      localStorage.removeItem("adminId"); // Ensure to clear localStorage
    },
    logout(state) {
      state.isAuthenticated = false;
      state.adminId = null;
      state.token = null;
      localStorage.removeItem("token"); // Clearing localStorage on logout
      localStorage.removeItem("adminId"); // Clearing localStorage on logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isPending(loginAsync), (state) => {
        state.loading = true;
        state.error = null; // reset previous error if any
      })
      .addMatcher(isFulfilled(loginAsync), (state, { payload }) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = payload.token;
        state.adminId = payload.adminId;
        state.error = null; // clear any errors
        localStorage.setItem("token", payload.token); // Persist token to localStorage
        localStorage.setItem("adminId", payload.adminId); // Persist adminId to localStorage
      })
      .addMatcher(isRejected(loginAsync), (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload as string; // if there's an error, update the state with the error message

        localStorage.removeItem("token"); // Also good practice to ensure token is cleared on login error
        localStorage.removeItem("adminId"); // Clearing localStorage
      });
  },
});


export const authReducer = authSlice.reducer;
export const { loginSuccess, loginFailure, logout } = authSlice.actions;