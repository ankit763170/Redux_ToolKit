import { createSlice } from "@reduxjs/toolkit";

const initialState =[];
const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers :{
        add(state,action){
            //action.payload is the item that we want to add
            state.push(action.payload)
        },
        remove(state,action){
           return  state.filter((items)=>items.id !== action.payload);
        }
    }


})
export const {add,remove}=CartSlice.actions
export default CartSlice.reducer