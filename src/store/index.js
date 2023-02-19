import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/cardSlices'
import discauntSlice from './slices/d'
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    discaunt: discauntSlice,
     
  },
})

