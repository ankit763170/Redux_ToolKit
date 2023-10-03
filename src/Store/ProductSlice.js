import { createSlice } from '@reduxjs/toolkit';
const API ='https:fakestoreapi.com/products'


export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
         setProducts(state, action) {
             state.data = action.payload;
         },
         setStatus(state, action) {
             state.status = action.payload;
         },
    },

});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//custom thunks

 export function fetchProducts() {
     return async function fetchProductThunk(dispatch, getState) {
         dispatch(setStatus(STATUSES.LOADING));
         try {
             const res = await fetch(API);
             const data = await res.json();
             dispatch(setProducts(data));
             dispatch(setStatus(STATUSES.IDLE));
         } catch (err) {
             console.log(err);
             dispatch(setStatus(STATUSES.ERROR));
         }
     };
 }
