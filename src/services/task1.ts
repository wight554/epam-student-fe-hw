import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {File, FileFormBody} from '../types';

export const task1Api = createApi({
  reducerPath: "task1Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/",
  }),
  endpoints: (builder) => ({
    getFiles: builder.query<string[], void>({
      query: () => "files",
      transformResponse: ({ files }) => files,
    }),
    getFileByName: builder.query<File, string | undefined>({
      query: (filename) => `files/${filename}`,
    }),
    createFile: builder.mutation<any, FileFormBody>({
      query: (file) => {
        return {
          url: "files",
          method: "POST",
          body: file,
        };
      },
    }),
  }),
});

export const {
  useGetFilesQuery,
  useGetFileByNameQuery,
  useCreateFileMutation,
} = task1Api;