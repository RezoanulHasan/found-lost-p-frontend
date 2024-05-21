/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { FC, useState, useEffect } from "react";

import {
  User,
  useAllUsersQuery,

  // useUpdateUserByIdMutation,
} from "@/redux/features/auth/userApi";

const ManageUsersLoading: FC = () => {
  // const [updateUserMutation] = useUpdateUserByIdMutation();
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const { data: response, isLoading } = useAllUsersQuery({
    page,
    limit,
    sortBy: "createdAt",
    sortOrder: "asc",
  });

  useEffect(() => {
    if (!isLoading && response) {
      setUsers(response?.users || []);
    }
  }, [response, isLoading]);

  return (
    <div>
      <h2 className="text-4xl lg:text-center md:text-center xl:text-center font-bold mb-4"></h2>

      <div className="flex justify-start lg:justify-end md:justify-end xl:justify-end items-center mt-4 mb-5">
        <input
          className="appearance-none border mb-10 border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
          placeholder="Search user"
          style={{ minWidth: "10rem" }}
        />
      </div>

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
              <td className="py-2 px-4 border-b"></td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4 whitespace-nowrap"></td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="btn "></button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="btn "></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-start lg:justify-end md:justify-end xl:justify-end items-center mt-4 mb-5">
        <button
          className="join-item btn btn-outline mr-2 px-4 py-2 rounded-md"
          disabled={page === 1}
        >
          Previous Page
        </button>

        <span className="text-red-700 text-xl font-bold md:mx-auto lg:mx-auto xl:mx-auto">
          Page - {page}
        </span>

        <button
          className="join-item btn btn-outline mr-2 px-4 py-2 rounded-md"
          disabled={users.length < limit}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ManageUsersLoading;
