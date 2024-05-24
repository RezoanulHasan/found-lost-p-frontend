"use client";
import React, { useState, useEffect } from "react";
import { useGetSingleUserQuery } from "@/redux/features/auth/profileApi";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { imageUpload } from "@/components/Hooks/imageUpoold";
import Container from "@/components/shared/Container/Container";
import UpdateProfileLoading from "./loading";
import { updateUserInformation, updateUserProfilePhoto } from "./action";
import useTitle from "@/components/Hooks/useTitle";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

interface User {
  id: any;
  name: string | undefined;
  email: string | undefined;
  age?: string | undefined;
  bio?: string | undefined;
  userImage: string | undefined;
}

const UpdateUserInfoPage: React.FC = () => {
  useTitle("Update Info");
  const {
    data: response,
    error,
    isLoading,
    refetch,
  } = useGetSingleUserQuery({});
  const [user, setUser] = useState<User | null>(null);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    if (!isLoading && response) {
      setUser(response.data?.user || null);
    }
  }, [response, isLoading]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setNewImage(file);
      const imageData = await imageUpload(file);
      if (imageData && imageData.data && imageData.data.url) {
        setUserImage(imageData.data.url);
      }
    }
  };

  const handleUpdateProfilePhoto = async () => {
    const userId = user?.id;
    if (newImage) {
      try {
        const imageUploadResponse = await imageUpload(newImage);
        if (
          imageUploadResponse &&
          imageUploadResponse.data &&
          imageUploadResponse.data.url
        ) {
          await updateUserProfilePhoto(userId, imageUploadResponse.data.url); // Call the server-side action function
          await refetch();
          Swal.fire({
            icon: "success",
            title: "Profile Updated",
            text: "Your profile photo has been updated successfully!",
          });
        }
      } catch (error) {
        console.error("Error updating profile photo:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while updating your profile photo.",
        });
      }
    }
  };

  const updateUserInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userId = user?.id;
      const nameElement = document.getElementById("name") as HTMLInputElement;
      const emailElement = document.getElementById("email") as HTMLInputElement;
      const ageElement = document.getElementById("age") as HTMLInputElement;
      const bioElement = document.getElementById("bio") as HTMLInputElement;

      if (!nameElement || !emailElement || !ageElement || !bioElement) {
        throw new Error("One or more input fields not found.");
      }

      const name = nameElement.value;
      const email = emailElement.value;
      const age = ageElement.value;
      const bio = bioElement.value;

      const updatedUserData = {
        name,
        email,
        age,
        bio,
      };

      await updateUserInformation(userId, updatedUserData); // Call the server-side action function
      await refetch();
      Swal.fire("Updated!", "User information has been updated.", "success");
    } catch (error) {
      console.error("Error updating user information:", error);
      Swal.fire(
        "Error!",
        "An error occurred while updating user information.",
        "error"
      );
    }
  };

  return (
    <Container>
      {isLoading && <UpdateProfileLoading />}
      {!isLoading || (!user && <div>Error fetching data</div>)}
      {!isLoading && user && (
        <div className=" flex flex-col min-h-screen justify-center items-center py-2 px-4 sm:px-6 lg:px-8">
          <SectionTitle subHeading="Update you profile" heading="Update Data" />
          <div className="max-w-md w-full space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center">
                <div>
                  {user.userImage ? (
                    <motion.img
                      loading="lazy"
                      src={user.userImage}
                      alt="User"
                      className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mb-4 shadow-lg"
                    />
                  ) : (
                    <div>
                      <motion.img
                        src="https://i.ibb.co/Fn9BZvN/images.png"
                        alt="Default user image"
                        className="mx-auto rounded-full mt-5"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-5">
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <div>
                  <button
                    className="bg-teal-500 text-white w-full rounded-md py-3 "
                    onClick={handleUpdateProfilePhoto}
                    type="button"
                  >
                    {isLoading ? "Loading..." : "Change profile Picture"}
                  </button>
                </div>
              </div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Update User Information
              </h2>
              <form className="mt-8 space-y-6" onSubmit={updateUserInfo}>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      defaultValue={user.name}
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      defaultValue={user.email}
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="age" className="sr-only">
                      Age
                    </label>
                    <input
                      id="age"
                      name="age"
                      type="text"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      defaultValue={response.data.age}
                      placeholder="Age"
                    />
                  </div>
                  <div>
                    <label htmlFor="bio" className="sr-only">
                      Bio
                    </label>
                    <input
                      id="bio"
                      name="bio"
                      type="text"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      defaultValue={response.data.bio}
                      placeholder="Bio"
                    />
                  </div>
                </div>
                <div>
                  <button
                    className="bg-teal-500   w-full rounded-md py-3 text-white"
                    type="submit"
                  >
                    {isLoading ? "Loading..." : "Update"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default UpdateUserInfoPage;
