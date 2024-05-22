import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

export const foundApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllFound: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/found-items",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.found], // Use tag for found items
    }),
    getSingleByUserFound: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/found-items/user-found",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.found], // Use tag for found items
    }),
    createFoundItem: build.mutation({
      query: (newFoundItem) => ({
        url: "/found-items",
        method: "POST",
        body: newFoundItem,
      }),
      invalidatesTags: [tagTypes.found], // Use tag for found items
    }),
    deleteFoundItem: build.mutation({
      query: (foundItemId) => ({
        url: `/found-items/${foundItemId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.found], // Use tag for found items
    }),
    updateFoundInfo: build.mutation({
      query: ({ foundItemId, updatedFoundItemData }) => ({
        url: `/found-items/${foundItemId}`,
        method: "PUT",
        body: updatedFoundItemData,
      }),
      invalidatesTags: [tagTypes.found], // Use tag for found items
    }),
  }),
});

export const {
  useGetSingleByUserFoundQuery,
  useGetAllFoundQuery,
  useCreateFoundItemMutation,
  useDeleteFoundItemMutation,
  useUpdateFoundInfoMutation,
} = foundApi;
