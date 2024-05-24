"use server";

import { tagTypesList } from "@/redux/tag-types";
import { cookies } from "next/headers";
import { TItemData } from "./AddLostItem";
import { TItemFData } from "./AddFoundtem";
import { TClaimsData } from "./AddClaimsItem";
export const AddLostItemInfo = async (data: TItemData) => {
  try {
    const token = cookies().get("token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/lost-items`,
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

export const AddFoundItemInfo = async (data: TItemFData) => {
  try {
    const token = cookies().get("token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/found-items`,
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

export const AddClaimsItemInfo = async (data: TClaimsData) => {
  try {
    const token = cookies().get("token")?.value || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/claims`,
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
