import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

export const MyLostFoundClamApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleByUserLost: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/my/lost",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.my], // Use tag for found items
    }),
    getSingleByUserFound: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/my/found",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.my], // Use tag for found items
    }),
    getSingleByUserClam: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/my/clam",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.my], // Use tag for found items
    }),
  }),
});

export const {
  useGetSingleByUserFoundQuery,
  useGetSingleByUserLostQuery,
  useGetSingleByUserClamQuery,
} = MyLostFoundClamApi;
