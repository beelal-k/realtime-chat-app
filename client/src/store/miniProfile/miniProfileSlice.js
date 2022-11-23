import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    open: false,
    check: 'working'

}

export const miniProfileSlice = createSlice({
    name: 'miniProfile',
    initialState,
    reducers: {
        showMiniProfile: ((state, actions) => {
            state.open = actions.payload;
        })
    }
})

export const { showMiniProfile } = miniProfileSlice.actions;
export default miniProfileSlice.reducer;