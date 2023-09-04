import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        query: () => {
          return {
            url: '/users',
            method: 'GET',
          };
        },
        transformResponse(response, meta, arg) {
          console.log('transform', response, meta, arg);
          return [...response.map(item => {
            return {
              id: item.id,
              username: item.name,
            }
          })];
        },
      }),
    };
  },
});

export const { useFetchUsersQuery } = usersApi;

export { usersApi };
