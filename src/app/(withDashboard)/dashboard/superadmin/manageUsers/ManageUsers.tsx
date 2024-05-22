/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { FC, useState, useEffect } from "react";
import Swal from "sweetalert2";

import useTitle from "@/components/Hooks/useTitle";
import {
  User,
  useAllUsersQuery,
  useDeleteUserByIdMutation,
  // useUpdateUserByIdMutation,
} from "@/redux/features/auth/userApi";
import { useDebounced } from "@/redux/helper";
import { motion } from "framer-motion";

import ManageUsersLoading from "./loading";
import { galleryAnimation } from "@/components/Hooks/GallerySection";

const ManageUsers: FC = () => {
  useTitle("All users");

  const [deleteUserMutation] = useDeleteUserByIdMutation();
  // const [updateUserMutation] = useUpdateUserByIdMutation();
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 });

  const {
    data: response,
    isLoading,
    isError,
    refetch,
  } = useAllUsersQuery({
    page,
    limit,
    sortBy: "createdAt",
    sortOrder: "asc",
    searchTerm: debouncedTerm,
  });

  useEffect(() => {
    if (!isLoading && response) {
      setUsers(response?.users || []);
    }
  }, [response, isLoading]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  //count total user
  const totalUsers = response?.meta?.total || 0;
  const usersCountPerPage = users.length;

  const handleDeleteClick = async (user: User) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await deleteUserMutation(user.id);
        refetch();
        setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
        Swal.fire("Deleted!", "User has been deleted.", "success");
      }
    } catch (error) {
      console.error("Error during user deletion:", error);
      Swal.fire("Error", "An error occurred during deletion.", "error");
    }
  };

  const handleUpdateClick = (user: User) => {
    Swal.fire({
      title: "Update User",
      html: `
        <h1>Set Role</h1>
        <select id="role" class="swal2-input">
          <option value="ADMIN" ${
            user.role === "ADMIN" ? "selected" : ""
          }>ADMIN</option>
          <option value="USER" ${
            user.role === "USER" ? "selected" : ""
          }>USER</option>
        </select>
        <input type="text" id="name" class="swal2-input" placeholder="Name" value="${
          user.name
        }">
        <input type="email" id="email" class="swal2-input" placeholder="Email" value="${
          user.email
        }">
      `,
      showCancelButton: true,
      confirmButtonText: "Update",
      preConfirm: async () => {
        try {
          const updatedUserData = {
            userId: user.id,
            role: (document.getElementById("role") as HTMLSelectElement).value,
            name: (document.getElementById("name") as HTMLInputElement).value,
            email: (document.getElementById("email") as HTMLInputElement).value,
          };

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/${user.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedUserData),
              cache: "no-store",
            }
          );

          if (!response.ok) {
            throw new Error("Failed to update user information.");
          }

          await refetch();

          Swal.fire(
            "Updated!",
            "User information has been updated.",
            "success"
          );
        } catch (error) {
          console.error("Error updating user information:", error);
          Swal.fire("Error!Failed to update user information.");
        }
      },
    });
  };
  // {error && <p className="text-red-500 mt-2">{error}</p>}
  if (isLoading) {
    return <ManageUsersLoading></ManageUsersLoading>;
  }

  if (isError || !Array.isArray(users)) {
    console.error("Error loading users or invalid data format", response);
    return <div>Error loading users or invalid data format</div>;
  }

  return (
    <>
      <h2 className="text-4xl lg:text-center md:text-center xl:text-center font-bold mb-4">
        User List
      </h2>

      <h2 className="text-4xl lg:text-center md:text-center xl:text-center font-bold mb-4">
        Total Users - {totalUsers}{" "}
        <span className="text-accent">Showing {usersCountPerPage} users</span>
      </h2>

      <div className="flex justify-start lg:justify-end md:justify-end xl:justify-end items-center mt-4 mb-5">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className="appearance-none border mb-10 border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
          placeholder="Search user"
          style={{ minWidth: "10rem" }}
        />
      </div>

      {users.length > 0 ? (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                IMAGE
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Update
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users?.map((user) => (
              <tr key={user?.id}>
                <td className="py-2 px-2 border-b">
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
                        className="w-32 h-20 md:h-28  md:w-28     object-cover rounded-full mb-4 shadow-lg"
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
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{user?.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user?.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user?.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user?.role !== "SuperAdmin" ? (
                    <button
                      className={`${
                        user?.isDeleted
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-red-500"
                      } text-white px-4 py-2 rounded ${
                        user.isDeleted ? "" : "hover:bg-red-600"
                      }`}
                      onClick={() =>
                        !user?.isDeleted && handleDeleteClick(user)
                      }
                      disabled={user?.isDeleted}
                    >
                      Delete
                    </button>
                  ) : (
                    <span className="text-gray-500">Cannot Delete</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className={`${
                      user.isDeleted || user?.role === "SuperAdmin"
                        ? "bg-black-500"
                        : "bg-blue-700"
                    } text-white px-4 py-2 rounded`}
                    onClick={() => handleUpdateClick(user)}
                    disabled={user?.isDeleted || user?.role === "SuperAdmin"}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <h1 className="text-center text-4xl mb-10 mt-32">
            No Users <span className="text-accent">Found</span>
          </h1>
        </div>
      )}

      <div className="flex justify-start lg:justify-end md:justify-end xl:justify-end items-center mt-4 mb-5">
        <button
          className="join-item btn btn-outline mr-2 px-4 py-2 rounded-md"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous Page
        </button>

        <span className="text-red-700 text-xl font-bold md:mx-auto lg:mx-auto xl:mx-auto">
          Page - {page}
        </span>

        <button
          className="join-item btn btn-outline mr-2 px-4 py-2 rounded-md"
          onClick={() => handlePageChange(page + 1)}
          disabled={users.length < limit}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default ManageUsers;
