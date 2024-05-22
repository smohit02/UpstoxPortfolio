import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        },

    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
