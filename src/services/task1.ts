import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFile, IFileFormBody } from "../types";
import { BASE_URL } from "../constants/api";

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
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(
                (filename) => ({ type: "File" as const, id: filename }),
                "File"
              ),
            ]
          : ["File"],
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
    changeFile: builder.mutation<void, Pick<IFile, "filename" | "content">>({
      query: ({ filename, content }) => ({
        url: `/api/v1/files/${filename}`,
        method: "PUT",
        body: { content },
      }),
      invalidatesTags: (result, error, { filename }) => [
        { type: "File", id: filename },
      ],
    }),
    deleteFile: builder.mutation<void, string>({
      query: (filename) => ({
        url: `/api/v1/files/${filename}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "File", id: arg }],
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
