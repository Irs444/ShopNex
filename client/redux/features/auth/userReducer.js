import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({} , (builder) => {
    builder.addCase("loginRequest", (state, action) => {
        state.loading= true;
    });
    builder.addCase("c", (state, action) => {
        state.loading= false;
        state.message = action.payload;
        state.isAut = true;
        
    });
    builder.addCase("loginFail", (state, action) => {
        state.isAuth = false;
        state.error = action.payload;
    });
    builder.addCase("clearError", (state, action) => {
        state.error = null;
        
    });
    builder.addCase("clearMessage", (state, action) => {
        state.message = null;
    });
})