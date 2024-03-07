import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        styling: borderSlice.reducer,
    }
});