/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState, useEffect, FC } from "react";
import { useGetSingleUserQuery } from "@/redux/features/auth/profileApi";
import { motion } from "framer-motion";
import Link from "next/link";
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
import { UserRole } from "@/types/common";
import { getUserInfo } from "@/utils/auth/auth.services";

export const UserInfoPage: FC = () => {
  useTitle("Personal Info");
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState("");
  const { data: response, error, isLoading } = useGetSingleUserQuery({});

  useEffect(() => {
    if (!isLoading && response) {
      setUser(response.data?.user || null);
    }
  }, [response, isLoading]);

  useEffect(() => {
    const { role } = getUserInfo() as User;
    setUserRole(role || (userRole as UserRole));
  }, []);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (error || !user) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <Container>
        <div className="min-h-screen flex items-center justify-center ">
          <div className="card w-96  bg-teal-500 shadow-xl">
            <figure>
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
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title ">User Information</h2>
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

              <div className="card-actions justify-end">
                <Link
                  href={`/dashboard/${userRole as UserRole}/profileUpdate`}
                  passHref
                >
                  <button className="px-8 py-3  bg-white text-black  rounded-full font-semibold hover:bg-teal-600 transition duration-300 animate-fade-in-left">
                    Update Info
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default UserInfoPage;
