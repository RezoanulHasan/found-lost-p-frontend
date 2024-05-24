"use server";
import { tagTypesList } from "@/redux/tag-types";
import { cookies } from "next/headers";
import { TPassword } from "./ChangePassword";

export const ChangePasswordData = async (data: TPassword) => {
  try {
    const token = cookies().get("token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/change-password`,
      {
        next: {
          tags: tagTypesList,
        },
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(data),
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const items = await res.json();
    return items;
  } catch (error) {
    console.error("Failed to add lost item info:", error);
    throw error; // Re-throw the error to handle it in the calling function if needed
  }
};
