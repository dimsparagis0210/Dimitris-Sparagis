import { createSlice } from "@reduxjs/toolkit";

export const stylingSlice = createSlice({
    name:"styling",
    initialState: {
        isBorderActive: false,
    },
    reducers:{
        toggleBorder(state) {
            state.isBorderActive = !state.isBorderActive;
        }
    }
});

export const stylingActions = stylingSlice.actions;