import { configureStore } from "@reduxjs/toolkit";
import { task1Api } from "../services/task1";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/auth";

export const store = configureStore({
  reducer: {
    [task1Api.reducerPath]: task1Api.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(task1Api.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
