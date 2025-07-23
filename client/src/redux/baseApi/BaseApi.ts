import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseAPi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (build) => ({
    getAll: build.query({
      query: () => '/',
    }),
  }),
})

export const { useGetAllQuery } = baseAPi