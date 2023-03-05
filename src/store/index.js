import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/cardSlices'
import catalogSlice from './slices/catalogSlices'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    catalog: catalogSlice,
   
     
  },
})

