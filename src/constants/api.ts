import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = "http://localhost:8080";

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("AUTH_TOKEN");

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});
