// src/api/userActions.js
"use server";
import { tagTypesList } from "@/redux/tag-types";
import { IItem } from "@/types/common";

export const updateLostItemInformation = async (
  ItemId: any,
  updatedItemData: IItem
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/found-items/${ItemId}`,
      {
        next: {
          tags: tagTypesList,
        },
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItemData),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update user information.");
    }

    return response.json(); // Assuming the server returns updated user data
  } catch (error) {
    throw new Error("An error occurred while updating user information.");
  }
};

export const updateFoundItemInformation = async (
  ItemId: any,
  updatedItemData: IItem
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/my/found${ItemId}`,
      {
        next: {
          tags: tagTypesList,
        },
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItemData),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update user information.");
    }

    return response.json(); // Assuming the server returns updated user data
  } catch (error) {
    throw new Error("An error occurred while updating user information.");
  }
};
