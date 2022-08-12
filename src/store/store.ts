import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
  devTools: import.meta.env.DEV,
});
