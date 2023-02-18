import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let itemToAdd = action.payload;
      let index = state.findIndex((item) => item.food.name === itemToAdd.name);
      if (index >= 0) {
        state[index].qty++;
      } else {
        state.push({ qty: 1, food: itemToAdd });
      }
    },
    clearBasket: (state) => {
      state.length = 0;
    },
    increaseItemQty: (state, action) => {
      let index = state.findIndex((item) => item.food.name === action.payload);
      state[index].qty++;
    },
    decreaseItemQty: (state, action) => {
      let index = state.findIndex((item) => item.food.name === action.payload);
      state[index].qty--;
      if (!state[index].qty) {state.splice(index, 1)}
    },
  },
});

export const { addToBasket, clearBasket, increaseItemQty, decreaseItemQty } =
  basketSlice.actions;

export default basketSlice.reducer;
