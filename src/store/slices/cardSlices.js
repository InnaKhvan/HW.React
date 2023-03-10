import { createSlice } from "@reduxjs/toolkit";

const initialState = { discount: 0, items: [] };
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let itemToAdd = action.payload;
      let index = state.items.findIndex(
        (item) => item.food.name === itemToAdd.name
      );
      if (index >= 0) {
        state.items[index].qty++;
      } else {
        state.items.push({ qty: 1, food: itemToAdd });
      }
    },
    clearBasket: (state) => {
      state.items.length = 0;
      state.sum = 0;
    },
    increaseItemQty: (state, action) => {
      let index = state.items.findIndex(
        (item) => item.food.name === action.payload
      );
      state.items[index].qty++;
    },
    decreaseItemQty: (state, action) => {
      let index = state.items.findIndex(
        (item) => item.food.name === action.payload
      );
      state.items[index].qty--;
      if (!state.items[index].qty) {
        state.items.splice(index, 1);
      }
    },
    applyDiscount: (state, action) => {
      state.discount = action.payload;
    },
  },
});

export const {
  addToBasket,
  clearBasket,
  increaseItemQty,
  decreaseItemQty,
  applyDiscount,
} = basketSlice.actions;

export default basketSlice.reducer;
