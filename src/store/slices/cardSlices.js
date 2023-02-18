import { createSlice } from '@reduxjs/toolkit'


const initialState = [];
export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
    
      state.push(action.payload);
    },
    clearBasket: (state) => {
        state = initialState; 
    }   
}})

export const { addToBasket, clearBasket} = basketSlice.actions

export default basketSlice.reducer