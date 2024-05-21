"use server";

import { FormValues } from "@/app/login/page";
import setAccessToken from "../auth/setAccessToken";
import { storeUserInfo } from "../auth/auth.services";
//import setAccessToken from "./setAccessToken";

export const loginUser = async (data: FormValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
    // cache: "no-store",
  });
  const userInfo = await res.json();
  ////  const passwordChangeRequired = userInfo.data.needPasswordChange;

  //if (userInfo?.data?.token) {
  // setAccessToken(userInfo.data.token, {
  // redirect: "/dashboard",
  //passwordChangeRequired,
  // });
  //}
  return userInfo;
};
