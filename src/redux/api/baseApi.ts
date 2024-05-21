import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
//import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints
import { tagTypesList } from "../tag-types";
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}`,
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
