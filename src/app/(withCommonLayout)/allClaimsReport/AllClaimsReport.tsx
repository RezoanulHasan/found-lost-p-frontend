"use client";

import Container from "@/components/shared/Container/Container";
import React, { useEffect, useState } from "react";
import { IClams } from "@/types/common";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

import useTitle from "@/components/Hooks/useTitle";
import { useGetAllClaimsQuery } from "@/redux/features/auth/clamApii";
import { motion } from "framer-motion";
import { galleryAnimation } from "@/components/Hooks/GallerySection";
const DEFAULT_IMAGE_URL =
  "https://banner2.cleanpng.com/20180704/sgs/kisspng-computer-icons-action-item-icon-design-clip-art-5b3d4ff37b7642.7302069315307448195057.jpg";
const AllClaimsReport: React.FC = () => {
  useTitle("All Claims Report");
  const {
    data: response,
    isError,
    isLoading,
  } = useGetAllClaimsQuery({
    sortBy: "createdAt",
    sortOrder: "asc",
  });

  const [items, setItems] = useState<IClams[]>([]);

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
      <div className="mt-32">
        <SectionTitle subHeading="All Clams Report" heading="Clams Report" />
        <div className="grid grid-cols-1 gap-4">
          {items.length > 0 ? (
            items
              .slice()
              .reverse()
              .map((item: IClams) => (
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
                    src={item.foundItem.image || DEFAULT_IMAGE_URL}
                    alt={
                      item.foundItem.image
                        ? "Lost Item"
                        : "Default Lost Item Image"
                    }
                    className="w-48  h-48 md:h-auto object-cover"
                  />

                  <div className="flex flex-col md:flex-row w-full">
                    <div className="p-4 md:w-2/3">
                      <h3 className="text-2xl font-bold text-teal-600">
                        {item.foundItemId}
                      </h3>
                      <p className="mt-2">
                        <strong>Lost Date:</strong> {item.lostDate}
                      </p>
                      <p className="mt-2">
                        <strong>Description:</strong>{" "}
                        {item.distinguishingFeatures}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-200">
                    <h3 className="text-xl font-bold text-teal-600">
                      Contact User Info
                    </h3>

                    <p className="mt-2">
                      <strong>Email:</strong> {item.foundItem.email}
                    </p>

                    <p className="mt-2">
                      <strong>Phone:</strong> {item.foundItem.phoneNumber}
                    </p>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center mt-40 text-3xl font-bold">
              No Report Found. No Data About Adding Any Lost Info Report
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default AllClaimsReport;
