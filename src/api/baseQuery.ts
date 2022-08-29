import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "../constants/api";

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
