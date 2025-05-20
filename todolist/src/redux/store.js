import { configureStore } from "@reduxjs/toolkit";
import editTaskReducer from "./slices/editTaskSlice"

export const store=configureStore({
    reducer:{
    editTaskStatus:editTaskReducer
    }
})