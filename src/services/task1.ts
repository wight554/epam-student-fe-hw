import { createApi } from '@reduxjs/toolkit/query/react'
import { File, FileFormBody } from '../types'
import { baseQuery } from '../api/baseQuery'

export const task1Api = createApi({
  reducerPath: 'task1Api',
  baseQuery,
  tagTypes: ['File'],
  endpoints: (builder) => ({
    getFiles: builder.query<string[], void>({
      query: () => '/api/v1/files',
      transformResponse: ({ files }) => files,
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                (filename) => ({ type: 'File' as const, id: filename }),
                'File'
              ),
            ]
          : ['File'],
    }),
    getFileByName: builder.query<File, string>({
      query: (filename) => `/api/v1/files/${filename}`,
      providesTags: (result) =>
        result
          ? [{ type: 'File' as const, id: result.filename }, 'File']
          : ['File'],
    }),
    createFile: builder.mutation<void, FileFormBody>({
      query: (file) => ({
        url: '/api/v1/files',
        method: 'POST',
        body: file,
      }),
    }),
    changeFile: builder.mutation<void, Pick<File, 'filename' | 'content'>>({
      query: ({ filename, content }) => ({
        url: `/api/v1/files/${filename}`,
        method: 'PUT',
        body: { content },
      }),
      invalidatesTags: (result, error, { filename }) => [
        { type: 'File', id: filename },
      ],
    }),
    deleteFile: builder.mutation<void, string>({
      query: (filename) => ({
        url: `/api/v1/files/${filename}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'File', id: arg }],
    }),
  }),
})

export const {
  useGetFilesQuery,
  useGetFileByNameQuery,
  useCreateFileMutation,
  useChangeFileMutation,
  useDeleteFileMutation,
} = task1Api
