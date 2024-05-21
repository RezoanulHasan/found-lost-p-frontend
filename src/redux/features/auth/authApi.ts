import { baseApi } from "../../api/baseApi";
export interface User {
  id: any;
  name: string;
  password: string;
  email: string;
  phoneNumber?: string;
  userImage?: string;
  role?: string;
  passwordChangeHistory?: any;
  createdAt: Date;
  updatedAt: Date;
  isDeleted?: boolean;
  users?: any;
  bio?: string;
  age?: any;
}

// Integrate with baseApi
const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
