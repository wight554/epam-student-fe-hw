import { configureStore } from "@reduxjs/toolkit";
import { task1Api } from "../services/task1";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [task1Api.reducerPath]: task1Api.reducer,
  },
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(task1Api.middleware),
});

setupListeners(store.dispatch);
