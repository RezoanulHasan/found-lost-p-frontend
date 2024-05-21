import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: () => ({
        url: "/my-profile",
        method: "GET",
      }),
      providesTags: [tagTypes.profile],
    }),
    updateUserInfo: build.mutation({
      query: ({ userId, updatedUserData }) => ({
        url: `/my-profile/${userId}`,
        method: "PUT",
        body: updatedUserData,
      }),
      invalidatesTags: [tagTypes.profile],
    }),
  }),
});

export const { useGetSingleUserQuery, useUpdateUserInfoMutation } = profileApi;
