import { createSlice } from "@reduxjs/toolkit";

const editTaskSlice=createSlice({
    name:"editTaskStatus",
    initialState:{
        editActive:false
    },
    reducers:{
        changeStatusToActive:(state)=>{
            state.editActive=true
        },
        changeStatusToInactive:(state)=>{
            state.editActive=false
        }
    }

})

export const {changeStatusToActive,changeStatusToInactive}=editTaskSlice.actions
export default editTaskSlice.reducer