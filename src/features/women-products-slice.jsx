import { createSlice } from "@reduxjs/toolkit";

export const womenProductsSlice = createSlice({
  name: "mensWathes",
  initialState: {
    dresses: [],
    shoes: [],
    watches: [],
    bags: [],
    jewellery: [],
  },
  reducers: {
    setWomenDresses: (state, action) => {
      state.dresses = action.payload;
    },
    setWomenShoes: (state, action) => {
      state.shoes = action.payload;
    },
    setWomenWatches: (state, action) => {
      state.watches = action.payload;
    },
    setWomenBags: (state, action) => {
      state.bags = action.payload;
    },
    setWomenJewellery: (state, action) => {
      state.jewellery = action.payload;
    },
  },
});

export const { setWomenDresses, setWomenShoes, setWomenWatches, setWomenBags, setWomenJewellery } = womenProductsSlice.actions;

export default womenProductsSlice.reducer;
