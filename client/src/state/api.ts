import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//uses createApi to call backend to setup data
export const api = createApi ({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: "main",
    tagTypes: ["Kpis", "Products", "Transactions"], //used to keep info
    endpoints: (build) => ({ //where we create our API calls
      getKpis: build.query<Array<GetKpisResponse>, void>({
        query: () => "kpi/kpis/",
        providesTags: ["Kpis"],
      }),
      getProducts: build.query<Array<GetProductsResponse>, void>({
        query: () => "product/products/",
        providesTags: ["Products"],
      }),
      getTransactions: build.query<Array<GetTransactionsResponse>, void>({
        query: () => "transaction/transactions/",
        providesTags: ["Transactions"],
      }),
    }),
  });

  export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
    api;
