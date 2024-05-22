import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

export const lostApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllLost: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/lost-items",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.lost],
    }),
    createLostItem: build.mutation({
      query: (newLostItem) => ({
        url: "/lost-items",
        method: "POST",
        body: newLostItem,
      }),
      invalidatesTags: [tagTypes.lost],
    }),
    deleteLostItem: build.mutation({
      query: (lostItemId) => ({
        url: `/lost-items/${lostItemId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.lost],
    }),
    updateLostInfo: build.mutation({
      query: ({ lostItemId, updatedLostItemData }) => ({
        url: `/lost-items/${lostItemId}`,
        method: "PUT",
        body: updatedLostItemData,
      }),
      invalidatesTags: [tagTypes.lost],
    }),
  }),
});

export const {
  useGetAllLostQuery,
  useCreateLostItemMutation,
  useDeleteLostItemMutation,
  useUpdateLostInfoMutation,
} = lostApi;
