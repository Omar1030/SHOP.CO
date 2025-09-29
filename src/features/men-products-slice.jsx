import { createSlice } from "@reduxjs/toolkit";

export const menProductsSlice = createSlice({
  name: "menProducts",
  initialState: {
    shirts: [],
    shoes: [],
    watches: [],
  },
  reducers: {
    setMenShirts: (state, action) => {
      state.shirts = action.payload;
    },
    setMenShoes: (state, action) => {
      state.shoes = action.payload;
    },
    setMenWatches: (state, action) => {
      state.watches = action.payload;
    },
  },
});

export const { setMenShirts, setMenShoes, setMenWatches } = menProductsSlice.actions;

export default menProductsSlice.reducer;
