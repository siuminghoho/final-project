import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
	isAuthenticated: boolean
    staffno: string | null 
}

const initialState: AuthState = {
	isAuthenticated: localStorage.getItem('token') !== null,
    staffno: null
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<string>) => {
			state.staffno = action.payload
            state.isAuthenticated = true
		},
        logout: (state) => {
            state.staffno = null
            localStorage.removeItem('token')
            state.isAuthenticated = false
        }
	}
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer