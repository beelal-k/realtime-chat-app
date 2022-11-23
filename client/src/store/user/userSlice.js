import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    email: '',
    password: '',
    friends: [],
    about: '',




}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUsername: (state, action) => {
            state.username = action.payload;
        },
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        updatePassword: (state, action) => {
            state.password = action.payload;
        },
        updateAbout: (state, action) => {
            state.about = action.payload;
        },
    }
})

export const { updateUsername, updateEmail, updatePassword } = userSlice.actions;
export default userSlice.reducer;