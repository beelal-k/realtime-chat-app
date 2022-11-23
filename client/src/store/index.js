import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'
import miniProfileReducer from './miniProfile/miniProfileSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        miniProfile: miniProfileReducer
    }


})