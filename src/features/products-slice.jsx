import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const menShirts = await axios.get("https://dummyjson.com/products/category/mens-shirts");
  const menShoes = await axios.get("https://dummyjson.com/products/category/mens-shoes");
  const menWatches = await axios.get("https://dummyjson.com/products/category/mens-watches");
  const womenDresses = await axios.get("https://dummyjson.com/products/category/womens-dresses");
  const womenShoes = await axios.get("https://dummyjson.com/products/category/womens-shoes");
  const womenBags = await axios.get("https://dummyjson.com/products/category/womens-bags");
  const womenJewellry = await axios.get("https://dummyjson.com/products/category/womens-jewellery");

  return [...menShirts.data.products, ...menShoes.data.products, ...menWatches.data.products, ...womenDresses.data.products, ...womenShoes.data.products, ...womenBags.data.products, ...womenJewellry.data.products];
});

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
  },
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
