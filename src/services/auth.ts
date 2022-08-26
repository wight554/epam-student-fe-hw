import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthFormBody } from "../types";
import { BASE_URL } from "../constants/api";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation<string, Pick<AuthFormBody, "email" | "password">>({
      query: (body) => ({
        url: "/api/v1/user/login",
        method: "POST",
        body: body,
      }),
      transformResponse: ({ token }) => token,
    }),
    register: builder.mutation<string, AuthFormBody>({
      query: (body) => ({
        url: "/api/v1/user/register",
        method: "POST",
        body: body,
      }),
      transformResponse: ({ token }) => token,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
