import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFile, IFileFormBody } from "../types";

const BASE_URL = "http://localhost:8080";

export const task1Api = createApi({
  reducerPath: "task1Api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
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
    changeFile: builder.mutation<
      void,
      Pick<IFile, "filename"> & Partial<IFile>
    >({
      query: ({ filename, content }) => ({
        url: `/api/v1/files/${filename}`,
        method: "PUT",
        body: { content },
      }),
      async onQueryStarted(
        { filename, content },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          task1Api.util.updateQueryData("getFileByName", filename, (draft) => {
            Object.assign(draft, { content });
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
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
