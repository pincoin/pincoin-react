import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cartApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.DEV_API_URL}`,
  }),
  endpoints(builder) {
    return {
      fetchCart: builder.query({
        query: () => {
          return {
            url: '/cart',
            method: 'GET',
          };
        },
      }),
      saveCart: builder.mutation({
        query: (cart) => {
          return {
            url: '/cart',
            method: 'POST',
            body: cart,
          };
        }
      }),
    };
  },
});

export const { useFetchUsersQuery } = cartApi;

export { cartApi };
