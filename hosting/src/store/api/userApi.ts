import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosInternalBaseQuery } from '@/lib/axiosBaseQuery';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: axiosInternalBaseQuery(),
  endpoints: (builder) => ({
    getUserProfile: builder.query<unknown[], void>({
      query: () => ({ url: 'pets', method: 'GET', headers: {} }),
    }),
  }),
});

export const { useGetUserProfileQuery } = userAPI;
