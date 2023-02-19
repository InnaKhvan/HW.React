import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/cardSlices'
export const store = configureStore({
  reducer: {
    basket: basketReducer,
   
     
  },
})

