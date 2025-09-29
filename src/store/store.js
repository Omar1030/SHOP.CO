import { configureStore } from "@reduxjs/toolkit";

import menProductsReducer from "../features/men-products-slice";
import womenProductsSlice from "../features/women-products-slice";

export default configureStore({
  reducer: {
    menProducts: menProductsReducer,
    womenProducts: womenProductsSlice,
  },
});
