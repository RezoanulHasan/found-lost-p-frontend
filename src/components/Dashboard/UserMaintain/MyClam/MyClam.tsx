"use client";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import {
  buttonAnimation,
  galleryAnimation,
} from "@/components/Hooks/GallerySection";
import useTitle from "@/components/Hooks/useTitle";
import Container from "@/components/shared/Container/Container";

import { useDeleteClaimMutation } from "@/redux/features/auth/clamApii";
import { IItem } from "@/types/common";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { useGetSingleByUserClamQuery } from "@/redux/features/MyLostFoundClamApi ";
import { tagTypesList } from "@/redux/tag-types";

const DEFAULT_IMAGE_URL =
  "https://banner2.cleanpng.com/20180704/sgs/kisspng-computer-icons-action-item-icon-design-clip-art-5b3d4ff37b7642.7302069315307448195057.jpg";

const MyClam: React.FC = () => {
  const {
    data: response,
    refetch,
    isError,
    isLoading,
  } = useGetSingleByUserClamQuery({
    sortBy: "createdAt",
    sortOrder: "asc",
  });

  const [items, setItems] = useState<IItem[]>([]);

  useTitle("My Clam");

  const [deleteUserMutation] = useDeleteClaimMutation();

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
        await deleteUserMutation(item.id);
        refetch();
        setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
        Swal.fire("Deleted!", "Item has been deleted.", "success");
      }
    } catch (error) {
      console.error("Error during item deletion:", error);
      Swal.fire("Error", "An error occurred during deletion.", "error");
    }
  };

  const handleUpdateClick = (item: IItem) => {
    Swal.fire({
      title: "Clam Report",
      html: `
      <h1 class="text-teal-600 font-bold text-xl">Update Clam Info</h1>
      <input type="date" id="lostDate" class="swal2-input" placeholder="lostDate" value="${
        item?.lostDate
      }">
      <h1 class="text-teal-600 font-bold">Description</h1>
      <textarea id="distinguishingFeatures" class="swal2-textarea" placeholder="distinguishingFeatures">${
        item.distinguishingFeatures
      }</textarea>
      <h1 class="mt-5 text-teal-600 font-bold text-xl">Set Status</h1>
      <select id="status" class="swal2-input">
        <option value="PENDING" ${
          item.status === "PENDING" ? "selected" : ""
        }>PENDING</option>
        <option value="APPROVED" ${
          item.status === "APPROVED" ? "selected" : ""
        }>APPROVED</option>
        <option value="REJECTED" ${
          item.status === "REJECTED" ? "selected" : ""
        }>REJECTED</option>
      </select>
      `,
      showCancelButton: true,
      confirmButtonText: "Update",
      preConfirm: async () => {
        try {
          const updatedUserData = {
            distinguishingFeatures: (
              document.getElementById(
                "distinguishingFeatures"
              ) as HTMLInputElement
            ).value,

            lostDate: (document.getElementById("lostDate") as HTMLInputElement)
              .value,
            status: (document.getElementById("status") as HTMLSelectElement)
              .value,
          };

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/claims/${item.id}`,
            {
              next: {
                tags: tagTypesList,
              },
              method: "PATCH",
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
  console.log(response);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !Array.isArray(items)) {
    console.error("Error loading data or invalid data format", response);
    return <div>Error loading data. Please try again later.</div>;
  }
  return (
    <Container>
      <div className="mt-10">
        <SectionTitle subHeading="My Clam Info" heading="Clam Report" />
        {items?.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
            {items
              ?.slice()
              .reverse()
              .map((item) => (
                <div
                  key={item?.id}
                  className="  bg-gradient-to-r from-purple-500 to-pink-500                  shadow-md rounded-lg overflow-hidden"
                >
                  <motion.img
                    loading="lazy"
                    variants={galleryAnimation}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    src={item?.foundItem?.image || DEFAULT_IMAGE_URL}
                    alt={item.image ? "Lost Item" : "Default Lost Item Image"}
                    className="w-full h-52  mt object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Use this id create Your clam
                    </h3>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Found Item ID: {item.foundItemId}
                    </h3>
                    <p className="mb-2">
                      <strong>
                        Item Name: {item?.foundItem?.foundItemName}
                      </strong>
                    </p>
                    <p className="mb-2">
                      <strong>Date:</strong> {item.lostDate}
                    </p>
                    <p className="mb-2">
                      <strong>Description:</strong>{" "}
                      {item.distinguishingFeatures}
                    </p>
                    <h3 className="text-xl font-bold text-white mt-4">
                      Contact Info
                    </h3>
                    <p className="mb-2">
                      <strong>Phone Number:</strong>{" "}
                      {item?.foundItem?.phoneNumber}
                    </p>
                    <div className="card-actions justify-end">
                      <p className="  font-bold">
                        <strong>STATUS:</strong>{" "}
                        <span className=" text-white">{item.status}</span>
                      </p>
                    </div>
                    <div className="flex justify-end space-x-4 mt-4">
                      <motion.button
                        onClick={() => handleDeleteClick(item)}
                        className="btn text-white bg-black  hover:bg-black    hover:text-white    flex items-center"
                      >
                        <FaTrashAlt className="mr-2" /> Delete
                      </motion.button>
                      <motion.button
                        onClick={() => handleUpdateClick(item)}
                        className="btn text-white bg-black  hover:bg-black    hover:text-white         flex items-center"
                      >
                        <FaEdit className="mr-2" /> Update
                      </motion.button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="text-center mt-40 text-3xl font-bold">
            No items found. You have not added any reports.
          </div>
        )}
      </div>
    </Container>
  );
};

export default MyClam;
