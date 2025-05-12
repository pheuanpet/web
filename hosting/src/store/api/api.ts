import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com/' }),
  endpoints: (builder) => ({
    getPets: builder.query<unknown[], void>({
      query: () => 'pets',
    }),
  }),
});

export const { useGetPetsQuery } = api;
