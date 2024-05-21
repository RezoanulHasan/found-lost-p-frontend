// src/api/userActions.js
"use server";
import { tagTypesList } from "@/redux/tag-types";
import { cookies } from "next/headers";

export const updateUserInformation = async (
  userId: any,
  updatedUserData: { name: string; email: string; age: string; bio: string }
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/my-profile/${userId}`,
      {
        next: {
          tags: tagTypesList,
        },
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: cookies().get("token")?.value || "",
        },
        body: JSON.stringify(updatedUserData),
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

export const updateUserProfilePhoto = async (userId: any, imageUrl: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/my-profile/${userId}`,
      {
        next: {
          tags: tagTypesList,
        },
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: cookies().get("token")?.value || "",
        },
        body: JSON.stringify({ userImage: imageUrl }), // Assuming userImage is the field to update
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update user profile photo.");
    }

    return response.json(); // Assuming the server returns updated user data
  } catch (error) {
    throw new Error("An error occurred while updating user profile photo.");
  }
};
