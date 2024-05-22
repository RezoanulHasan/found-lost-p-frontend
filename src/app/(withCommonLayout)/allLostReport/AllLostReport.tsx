"use client";

import Container from "@/components/shared/Container/Container";
import React, { useEffect, useState } from "react";
import { useGetAllLostQuery } from "@/redux/features/auth/lostApi";
import { IItem } from "@/types/common";
import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { galleryAnimation } from "@/components/Hooks/GallerySection";

const DEFAULT_IMAGE_URL =
  "https://banner2.cleanpng.com/20180704/sgs/kisspng-computer-icons-action-item-icon-design-clip-art-5b3d4ff37b7642.7302069315307448195057.jpg";

const AllLostReport: React.FC = () => {
  const {
    data: response,
    isError,
    isLoading,
  } = useGetAllLostQuery({
    sortBy: "createdAt",
    sortOrder: "asc",
  });

  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    if (!isLoading && response && Array.isArray(response.data)) {
      setItems(response.data);
    }
  }, [response, isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !Array.isArray(items)) {
    console.error("Error loading data or invalid data format", response);
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <Container>
      <div className="mt-32">
        <SectionTitle subHeading="All Lost Report" heading="Lost Report" />
        <div className="grid grid-cols-1  gap-4">
          {items.map((item: IItem) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg"
            >
              <motion.img
                loading="lazy"
                variants={galleryAnimation}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                src={item.image || DEFAULT_IMAGE_URL}
                alt={item.image ? "Lost Item" : "Default Lost Item Image"}
                className="w-48  h-48 md:h-auto object-cover"
              />
              <div className="flex flex-col md:flex-row w-full">
                <div className="p-4 md:w-2/3">
                  <h3 className="text-2xl font-bold text-teal-600">
                    {item.lostItemName}
                  </h3>
                  <p className="mt-2">
                    <strong>Category:</strong> {item.category}
                  </p>

                  <p className="mt-2">
                    <strong>Location:</strong> {item.location}
                  </p>
                  <p className="mt-2">
                    <strong>LostDate:</strong> {item.date}
                  </p>
                  <p className="mt-2">
                    <strong>Description:</strong> {item.description}
                  </p>
                  <div className="card-actions justify-end">
                    <p className="mt-2 text-red-500 font-bold">
                      <strong>STATUS:</strong> {item.status}
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-200">
                  <h3 className="text-xl font-bold text-teal-600">
                    Contact User Info
                  </h3>
                  <p className="mt-2">
                    <strong>Name:</strong> {item.user.name}
                  </p>
                  <p className="mt-2">
                    <strong>Email:</strong> {item.email}
                  </p>

                  <p className="mt-2">
                    <strong>Phone:</strong> {item.phoneNumber}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AllLostReport;
