import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async () => {
    let catalog = await fetch("food.json").then((r) => r.json());
    return catalog;
  }
);

const initialState = { loading: "start", items: [] };

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCatalog.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.items.length = 0;
      state.items.push(...action.payload);
    });
    builder.addCase(fetchCatalog.pending, (state, action) => {
      state.loading = "pending";
      
    });
    builder.addCase(fetchCatalog.rejected, (state, action) => {
      state.loading = "rejected";

    });
  },
});


export default catalogSlice.reducer;
