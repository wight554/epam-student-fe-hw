import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFile, IFileFormBody } from "../types";

const BASE_URL = "http://localhost:8080";

export const task1Api = createApi({
  reducerPath: "task1Api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["File"],
  endpoints: (builder) => ({
    getFiles: builder.query<string[], void>({
      query: () => "/api/v1/files",
      transformResponse: ({ files }) => files,
    }),
    getFileByName: builder.query<IFile, string>({
      query: (filename) => `/api/v1/files/${filename}`,
      providesTags: (result, error, arg) =>
        result
          ? [{ type: "File" as const, id: result.filename }, "File"]
          : ["File"],
    }),
    createFile: builder.mutation<void, IFileFormBody>({
      query: (file) => ({
        url: "/api/v1/files",
        method: "POST",
        body: file,
      }),
    }),
    changeFile: builder.mutation<
      void,
      Pick<IFile, "filename"> & Partial<IFile>
    >({
      query: ({ filename, content }) => ({
        url: `/api/v1/files/${filename}`,
        method: "PUT",
        body: { content },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "File", id: arg.filename },
      ],
    }),
    deleteFile: builder.mutation<void, string>({
      query: (filename) => ({
        url: `/api/v1/files/${filename}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetFilesQuery,
  useGetFileByNameQuery,
  useCreateFileMutation,
  useChangeFileMutation,
  useDeleteFileMutation,
} = task1Api;
