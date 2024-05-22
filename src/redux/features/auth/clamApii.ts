import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

export const claimApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllClaims: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/claims",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.claim], // Use tag for claims
    }),
    createClaim: build.mutation({
      query: (newClaim) => ({
        url: "/claims",
        method: "POST",
        body: newClaim,
      }),
      invalidatesTags: [tagTypes.claim], // Use tag for claims
    }),
    deleteClaim: build.mutation<void, string>({
      query: (claimId) => ({
        url: `/claims/${claimId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.claim], // Use tag for claims
    }),
  }),
});

export const {
  useGetAllClaimsQuery,
  useCreateClaimMutation,
  useDeleteClaimMutation,
} = claimApi;
