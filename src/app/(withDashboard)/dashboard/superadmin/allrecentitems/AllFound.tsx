"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/shared/Container/Container";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { IItem } from "@/types/common";
import { useGetAllFoundQuery } from "@/redux/features/auth/foundApi";
import { motion } from "framer-motion";
import { useDebounced } from "@/redux/helper";

const DEFAULT_IMAGE_URL =
  "https://banner2.cleanpng.com/20180704/sgs/kisspng-computer-icons-action-item-icon-design-clip-art-5b3d4ff37b7642.7302069315307448195057.jpg";

const AllFound: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 });

  const {
    data: response,
    isError,
    isLoading,
  } = useGetAllFoundQuery({
    sortBy: "createdAt",
    sortOrder: "asc",
    searchTerm: debouncedTerm,
  });

  const [items, setItems] = useState<IItem[]>([]);
  const [filters, setFilters] = useState({
    itemName: "",
    category: "",
    location: "",
    date: "",
    status: "",
  });

  useEffect(() => {
    if (!isLoading && response && Array.isArray(response.data)) {
      setItems(response.data);
    }
  }, [response, isLoading]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredItems = items.filter((item) => {
    return (
      item.foundItemName
        .toLowerCase()
        .includes(filters.itemName.toLowerCase()) &&
      item.category.toLowerCase().includes(filters.category.toLowerCase()) &&
      item.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      item.date.toLowerCase().includes(filters.date.toLowerCase()) &&
      item.status.toLowerCase().includes(filters.status.toLowerCase())
    );
  });

  if (isLoading) {
    return (
      <Container>
        <div className="flex justify-center items-center min-h-screen">
          <p>Loading...</p>
        </div>
      </Container>
    );
  }

  if (isError) {
    console.error("Error loading data:", response);
    return (
      <Container>
        <div className="flex justify-center items-center min-h-screen">
          <p>Error loading data. Please try again later.</p>
        </div>
      </Container>
    );
  }

  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="col-span-1">
        <div className="bg-white mt-36  p-4 rounded-md shadow-md">
          <SectionTitle subHeading="Filter " heading="Items" />
          <div className="flex flex-col gap-4">
            <select
              name="itemName"
              onChange={handleFilterChange}
              className="p-2 border rounded-md"
            >
              <option value="">Item Name</option>
              {Array.from(new Set(items.map((item) => item.foundItemName))).map(
                (name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                )
              )}
            </select>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="p-2 border rounded-md"
            >
              <option value="">Category</option>
              {Array.from(new Set(items.map((item) => item.category))).map(
                (category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                )
              )}
            </select>
            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="p-2 border rounded-md"
            >
              <option value="">Location</option>
              {Array.from(new Set(items.map((item) => item.location))).map(
                (location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                )
              )}
            </select>

            <select
              name="date"
              value={filters.date}
              onChange={handleFilterChange}
              className="p-2 border rounded-md"
            >
              <option value="">Date</option>
              {Array.from(new Set(items.map((item) => item.date))).map(
                (date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                )
              )}
            </select>

            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="p-2 border rounded-md"
            >
              <option value="">Status</option>
              {["PENDING", "APPROVED", "REJECTED"].map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="col-span-2">
        <div className="bg-white p-4 rounded-md shadow-md">
          <SectionTitle subHeading="Found Report" heading="All Found Report" />

          <div className="flex justify-start lg:justify-end md:justify-end xl:justify-end items-center mt-4 mb-5">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              className="appearance-none border mb-10  border-teal-700 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
              placeholder="Search items by-name,location,category"
              style={{ minWidth: "20rem" }}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Item Name</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Location</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">User Info</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.length > 0 ? (
                  filteredItems
                    .slice()
                    .reverse()
                    .map((item: IItem) => (
                      <tr key={item?.id} className="border-b">
                        <td className="px-4 py-2">
                          <motion.img
                            src={item.image || DEFAULT_IMAGE_URL}
                            alt={
                              item.image
                                ? "Found Item"
                                : "Default Found Item Image"
                            }
                            className="w-16 h-16 object-cover"
                          />
                        </td>
                        <td className="px-4 py-2">{item.foundItemName}</td>
                        <td className="px-4 py-2">{item.category}</td>
                        <td className="px-4 py-2">{item.location}</td>
                        <td className="px-4 py-2">{item.date}</td>
                        <td className="px-4 py-2">{item.description}</td>
                        <td className="px-4 py-2 text-red-500 font-bold">
                          {item.status}
                        </td>
                        <td className="px-4 py-2">
                          <p>
                            <strong>Name:</strong> {item.user.name}
                          </p>
                          <p>
                            <strong>Email:</strong> {item.email}
                          </p>
                          <p>
                            <strong>Phone:</strong> {item.phoneNumber}
                          </p>
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td
                      colSpan={8}
                      className="text-center py-8 text-3xl font-bold"
                    >
                      No matching reports found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFound;
