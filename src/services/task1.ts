import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFile, IFileFormBody } from "../types";

export const task1Api = createApi({
  reducerPath: "task1Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  endpoints: (builder) => ({
    getFiles: builder.query<string[], void>({
      query: () => "/api/v1/files",
      transformResponse: ({ files }) => files,
    }),
    getFileByName: builder.query<IFile, string>({
      query: (filename) => `/api/v1/files/${filename}`,
    }),
    createFile: builder.mutation<void, IFileFormBody>({
      query: (file) => ({
        url: "/api/v1/files",
        method: "POST",
        body: file,
      }),
    }),
  }),
});

export const {
  useGetFilesQuery,
  useGetFileByNameQuery,
  useCreateFileMutation,
} = task1Api;
