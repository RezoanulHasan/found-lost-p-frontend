import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "../../tag-types";

export interface User {
  id: any;
  userId?: any;
  name: string;
  password: string;
  email: string;
  phoneNumber?: string;
  userImage?: string;
  role: string;
  passwordChangeHistory?: any;
  createdAt: Date;
  updatedAt: Date;
  isDeleted?: boolean;
  users?: any;
  data?: any;
  bio?: string;
  age?: any;
}

// Integrate with baseApi
const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Map superAdminController routes to authApi
    allUsers: builder.query({
      query: (arg: Record<string, any>) => ({
        url: "/users",
        method: "GET",
        params: arg,
      }),

      providesTags: [tagTypes.users],
    }),
    getUserById: builder.query<User[], string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "GET",
      }),

      providesTags: [tagTypes.users],
    }),
    deleteUserById: builder.mutation<void, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.users],
    }),

    updateUserByIds: builder.mutation<
      User,
      { userId: string; updatedUserData: Partial<User> }
    >({
      query: ({ userId, updatedUserData }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: updatedUserData,
      }),
      invalidatesTags: [tagTypes.users],
    }),

    updateUserById: builder.mutation<
      User,
      { userId: string; updatedUserData: Partial<User> }
    >({
      query: ({ userId, updatedUserData }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: updatedUserData,
      }),
      invalidatesTags: [tagTypes.users],
    }),
    promoteUser: builder.mutation({
      query: (userId) => ({
        url: `/promote/${userId}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useAllUsersQuery,
  useGetUserByIdQuery,
  useDeleteUserByIdMutation,
  useUpdateUserByIdMutation,
  usePromoteUserMutation,
} = userApi;
//User,
//{// userId: string; updatedUserData: Partial<User> }
