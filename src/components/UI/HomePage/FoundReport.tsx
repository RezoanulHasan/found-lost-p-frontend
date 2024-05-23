"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { IItem } from "@/types/common";
import { motion } from "framer-motion";
import {
  buttonAnimation,
  galleryAnimation,
} from "@/components/Hooks/GallerySection";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { useGetAllFoundQuery } from "@/redux/features/auth/foundApi";

const FoundReport: React.FC = () => {
  const {
    data: response,
    isError,
    isLoading,
  } = useGetAllFoundQuery({
    sortBy: "createdAt",
    sortOrder: "asc",
  });

  const [items, setItems] = useState<IItem[]>([]);
  useEffect(() => {
    if (!isLoading && response && response.data) {
      const reversedData = response.data.slice().reverse(); // Reverse the array to get the latest 5items first
      const latestData = reversedData.slice(
        0,
        Math.min(5, reversedData.length)
      ); // Get the latest 5 items
      setItems(latestData);
    }
  }, [response, isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !Array.isArray(items)) {
    console.error("Error loading data or invalid data format", response);
    return <div>Error loading data or invalid data format</div>;
  }

  return (
    <div>
      <SectionTitle subHeading="Recent Lost Report" heading="Lost Report" />
      <div className="grid grid-cols-1 sm:grid-cols-3   md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items?.map((item: IItem) => (
          <div key={item?.id} className="overflow-hidden rounded-lg shadow-lg">
            {item.image ? (
              <motion.img
                loading="lazy"
                variants={galleryAnimation}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                src={item.image}
                alt="Lost Item"
                className="w-full h-48 object-cover"
              />
            ) : (
              <motion.img
                src="https://banner2.cleanpng.com/20180704/sgs/kisspng-computer-icons-action-item-icon-design-clip-art-5b3d4ff37b7642.7302069315307448195057.jpg"
                variants={galleryAnimation}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                alt="Default Lost Item Image"
                className="w-full h-48 object-cover"
              />
            )}
            <div className="px-4 py-2">
              <h3 className="text-2xl font-bold text-teal-600">
                {item.foundItemName}
              </h3>
              <p className="mt-2">{item.description}</p>
              {/* Render other fields as needed */}
            </div>
          </div>
        ))}
      </div>

      <div className="card-actions   flex  justify-center mt-10">
        <Link href="/allFoundReport" passHref>
          <motion.button
            variants={buttonAnimation}
            whileHover="hover"
            className="btn-lg btn btn-active btn-accent text-white"
          >
            All LostReport Items
          </motion.button>
        </Link>

        <Link href="/dashboard/addFoundItems" passHref>
          <motion.button
            variants={buttonAnimation}
            whileHover="hover"
            className="btn-lg btn btn-active btn-accent text-white"
          >
            ADD Report Items
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default FoundReport;
