import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.DEV_API_URL}`,
  }),
  endpoints(builder) {
    return {
      fetchCategories: builder.query({
        providesTags: ['categories'],
        query: () => {
          return {
            url: '/categories',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchCategoriesQuery } = categoriesApi;
export { categoriesApi };
