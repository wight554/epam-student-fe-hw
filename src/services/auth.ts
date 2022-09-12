import { createApi } from "@reduxjs/toolkit/query/react";
import { AuthFormBody, User } from "../types";
import { baseQuery } from "../api/baseQuery";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery,
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    getUser: builder.query<User, null>({
      query: () => "/api/v1/user",
      providesTags: ["Auth"],
    }),
    login: builder.mutation<string, Pick<AuthFormBody, "email" | "password">>({
      query: (body) => ({
        url: "/api/v1/user/login",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Auth"],
      transformResponse: ({ token }) => token,
    }),
    register: builder.mutation<string, AuthFormBody>({
      query: (body) => ({
        url: "/api/v1/user/register",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Auth"],
      transformResponse: ({ token }) => token,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserQuery } =
  authApi;
