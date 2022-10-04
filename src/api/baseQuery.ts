import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const baseQuery = fetchBaseQuery({
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('AUTH_TOKEN')

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})
