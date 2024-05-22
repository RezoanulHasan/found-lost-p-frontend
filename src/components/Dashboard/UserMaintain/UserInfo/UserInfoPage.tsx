"use client";

import React, { useState, useEffect, FC } from "react";
import { useGetSingleUserQuery } from "@/redux/features/auth/profileApi";
import { motion } from "framer-motion";

import Spinner from "@/components/shared/Spinner/Spinner";

import { User } from "@/redux/features/auth/userApi";

import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineIdcard,
  AiOutlineProfile,
  AiOutlineCalendar,
} from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import Container from "@/components/shared/Container/Container";
import useTitle from "@/components/Hooks/useTitle";
import { galleryAnimation } from "@/components/Hooks/GallerySection";

export const UserInfoPage: FC = () => {
  useTitle("Personal Info");
  const [user, setUser] = useState<User | null>(null);

  const { data: response, error, isLoading } = useGetSingleUserQuery({});

  useEffect(() => {
    if (!isLoading && response) {
      setUser(response.data?.user || null);
    }
  }, [response, isLoading]);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (error || !user) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <Container>
        <div className="card lg:card-side bg-black shadow-xl    card-actions justify-around">
          <figure>
            <div className="flex justify-center items-center mb-4">
              <>
                {user.userImage ? (
                  <motion.img
                    loading="lazy"
                    variants={galleryAnimation}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    src={user.userImage}
                    alt="User"
                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mb-4 shadow-lg"
                  />
                ) : (
                  <motion.img
                    src="https://i.ibb.co/Fn9BZvN/images.png"
                    variants={galleryAnimation}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    alt="Default user image"
                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mb-4 shadow-lg"
                  />
                )}
              </>
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">User Information</h2>
            <div className="flex flex-col">
              <div className="flex items-center text-white mb-2">
                <AiOutlineUser className="mr-2" />
                <span>Name:</span> {user.name}
              </div>
              <div className="flex items-center text-white mb-2">
                <AiOutlineMail className="mr-2" />
                <span>Email:</span> {user?.email}
              </div>
              <div className="flex items-center text-white mb-2">
                <AiOutlineCalendar className="mr-2" />
                <span>Age:</span> {response.data?.age || "Not provided"}
              </div>
              <div className="flex items-center text-white mb-2">
                <AiOutlineProfile className="mr-2" />
                <span>Bio:</span> {response.data?.bio || "Not provided"}
              </div>
              <div className="flex items-center text-white mb-2">
                <AiOutlineIdcard className="mr-2" />
                <span>Role:</span> {user?.role || "Not provided"}
              </div>
            </div>
            <div className="flex items-center text-white mb-2">
              <AiOutlineEdit className="text-white text-2xl" />

              <span>Update</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default UserInfoPage;
