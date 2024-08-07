"use client";

import Container from "@/components/shared/Container/Container";
import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { IItem } from "@/types/common";
import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import {
  galleryAnimation,
  buttonAnimation,
} from "@/components/Hooks/GallerySection";
import { useGetSingleByUserLostQuery } from "@/redux/features/MyLostFoundClamApi ";
import useTitle from "@/components/Hooks/useTitle";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useDeleteLostItemMutation } from "@/redux/features/auth/lostApi";
import { tagTypesList } from "@/redux/tag-types";
import Spinner from "@/components/shared/Spinner/Spinner";
import { useDebounced } from "@/redux/helper";
const DEFAULT_IMAGE_URL =
  "https://banner2.cleanpng.com/20180704/sgs/kisspng-computer-icons-action-item-icon-design-clip-art-5b3d4ff37b7642.7302069315307448195057.jpg";

const MyLostItem: React.FC = () => {
  useTitle("My Lost Report");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 });
  const {
    data: response,
    refetch,
    isError,
    isLoading,
  } = useGetSingleByUserLostQuery({
    sortBy: "createdAt",
    sortOrder: "asc",
    searchTerm: debouncedTerm,
  });

  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    if (!isLoading && response && Array.isArray(response.data)) {
      setItems(response.data);
    }
  }, [response, isLoading]);
  console.log(response);

  const [deleteUserMutation] = useDeleteLostItemMutation();

  const handleDeleteClick = async (item: IItem) => {
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
        await deleteUserMutation(item?.id);
        refetch();
        setItems((prevItems) => prevItems.filter((i) => i.id !== item?.id));
        Swal.fire("Deleted!", "Item has been deleted.", "success");
      }
    } catch (error) {
      console.error("Error during item deletion:", error);
      Swal.fire("Error", "An error occurred during deletion.", "error");
    }
  };

  const handleUpdateClick = (item: IItem) => {
    Swal.fire({
      title: "Lost Item Info",
      html: `
      <h1 class=" front-bold text-xl">Update Item info</h1>
     
        <h1 class="text-teal-600 front-bold ">Category</h1>
        <input type="text" id="category" class="swal2-input" placeholder="Category" value="${item.category}">
        <h1 class="text-teal-600 front-bold ">Item Name</h1>
        <input type="text" id="lostItemName" class="swal2-input" placeholder="Found Item Name" value="${item.lostItemName}">
        <h1 class="text-teal-600 front-bold ">Location</h1>
        <input type="text" id="location" class="swal2-input" placeholder="Location" value="${item.location}">


        
        <h1 class="text-teal-600 front-bold ">Email</h1>
        <input type="email" id="email" class="swal2-input" placeholder="Email" value="${item.email}">
        
        <h1 class="text-teal-600 front-bold ">Phone Number</h1>
        <input type="tel" id="phoneNumber" class="swal2-input" placeholder="Phone Number" value="${item.phoneNumber}">
        <h1 class="text-teal-600 front-bold ">Description</h1>
        <textarea id="description" class="swal2-textarea" placeholder="Description">${item.description}</textarea>
        <h1 class="text-teal-600 front-bold ">Update Date</h1>
        <input type="date" id="date" class="swal2-input" placeholder="Date" value="${item.date}">
        <h1  class=" mt-5 text-teal-600 front-bold text-xl">Set status</h1>
        <select id="status" class="swal2-input">
          <option value="LOST">LOST</option>
          <option value="FOUND">FOUND</option>
    
        </select>
      `,
      showCancelButton: true,
      confirmButtonText: "Update",
      preConfirm: async () => {
        try {
          const updatedUserData = {
            item: item.id,
            category: (document.getElementById("category") as HTMLInputElement)
              .value,
            description: (
              document.getElementById("description") as HTMLInputElement
            ).value,
            date: (document.getElementById("date") as HTMLInputElement).value,
            lostItemName: (
              document.getElementById("lostItemName") as HTMLInputElement
            ).value,
            location: (document.getElementById("location") as HTMLInputElement)
              .value,
            status: (document.getElementById("status") as HTMLSelectElement)
              .value,
            phoneNumber: (
              document.getElementById("phoneNumber") as HTMLInputElement
            ).value,
            email: (document.getElementById("email") as HTMLInputElement).value,
          };

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/lost-items/${item.id}`,
            {
              next: {
                tags: tagTypesList,
              },
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
          Swal.fire("Error!", "Failed to update user information.", "error");
        }
      },
    });
  };
  useEffect(() => {
    if (!isLoading && response && Array.isArray(response.data)) {
      setItems(response.data);
    }
  }, [response, isLoading]);

  if (isLoading) return <Spinner></Spinner>;
  if (isError || !Array.isArray(items)) {
    console.error("Error loading data or invalid data format", response);
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <Container>
      <div className="mt-5">
        <SectionTitle subHeading="MY LOST ITEMS" heading="Lost Report" />
        <div className="card-actions justify-center">
          <div className="flex justify-start lg:justify-end md:justify-end xl:justify-end items-center mt-4 mb-5">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              className="appearance-none border mb-10 border-teal-700 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
              placeholder="Search items by-name,location,category"
              style={{ minWidth: "20rem" }}
            />
          </div>
        </div>
        {items?.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {items
              ?.slice()
              .reverse()
              .map((item: IItem) => (
                <div
                  key={item?.id}
                  className="flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg"
                >
                  <motion.img
                    loading="lazy"
                    variants={galleryAnimation}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    src={item?.image || DEFAULT_IMAGE_URL}
                    alt={item.image ? "Lost Item" : "Default Lost Item Image"}
                    className="w-48  h-48 md:h-auto object-cover"
                  />
                  <div className="flex flex-col md:flex-row w-full">
                    <div className="p-4 md:w-2/3">
                      <h3 className="text-2xl font-bold text-teal-600">
                        {item.foundItemName}
                      </h3>
                      <p className="mt-2">
                        <strong>Category:</strong> {item?.category}
                      </p>

                      <p className="mt-2">
                        <strong>Location:</strong> {item?.location}
                      </p>
                      <p className="mt-2">
                        <strong>LostDate:</strong> {item?.date}
                      </p>
                      <p className="mt-2">
                        <strong>Description:</strong> {item?.description}
                      </p>
                      <div className="card-actions justify-end">
                        <p className="mt-2 text-red-500 font-bold">
                          <strong>STATUS:</strong> {item?.status}
                        </p>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-200">
                      <h3 className="text-xl font-bold text-teal-600">
                        Contact User Info
                      </h3>
                      <p className="mt-2">
                        <strong>Name:</strong> {item?.user?.name}
                      </p>
                      <p className="mt-2">
                        <strong>Email:</strong> {item?.email}
                      </p>

                      <p className="mt-2">
                        <strong>Phone:</strong> {item?.phoneNumber}
                      </p>
                    </div>
                  </div>
                  <div className="gap-5 p-5 m-5">
                    <motion.button
                      variants={buttonAnimation}
                      whileHover="hover"
                      onClick={() => handleDeleteClick(item)}
                      className="btn-lg btn btn-active mb-5 btn-accent text-black"
                    >
                      <FaTrashAlt className="mr-2" /> Delete
                    </motion.button>
                    <motion.button
                      variants={buttonAnimation}
                      whileHover="hover"
                      onClick={() => handleUpdateClick(item)}
                      className="btn-lg btn btn-active btn-accent mt-5 text-black"
                    >
                      <FaEdit className="mr-2" /> Update
                    </motion.button>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="text-center  mt-40  text-3xl  font-bold ">
            No Report Found.
          </div>
        )}
      </div>
    </Container>
  );
};
export default MyLostItem;
