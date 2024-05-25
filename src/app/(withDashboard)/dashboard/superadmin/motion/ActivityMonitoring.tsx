"use client";
import useTitle from "@/components/Hooks/useTitle";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import React, { useState, useEffect } from "react";
import {
  RiUserLine,
  RiFileListLine,
  RiShoppingBasketLine,
  RiSearchLine,
} from "react-icons/ri";

const ActivityMonitoring: React.FC = () => {
  const [counts, setCounts] = useState<any>(null);
  useTitle("Activity Monitoring");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/counts`
        );
        if (response.ok) {
          const data = await response.json();
          setCounts(data.data);
        } else {
          console.error("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-10">
      <h1 className="text-3xl font-bold text-center mt-8 mb-4"></h1>

      <SectionTitle
        subHeading="Activity Monitoring Dashboard"
        heading=" Report"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <DashboardCard
          icon={<RiUserLine className="w-8 h-8 text-blue-500" />}
          title="Users"
          count={counts?.users || 0}
        />
        <DashboardCard
          icon={<RiFileListLine className="w-8 h-8 text-green-500" />}
          title="Claims"
          count={counts?.claims || 0}
        />
        <DashboardCard
          icon={<RiShoppingBasketLine className="w-8 h-8 text-yellow-500" />}
          title="Lost Items"
          count={counts?.lostItems || 0}
        />
        <DashboardCard
          icon={<RiSearchLine className="w-8 h-8 text-red-500" />}
          title="Found Items"
          count={counts?.foundItems || 0}
        />
      </div>
    </div>
  );
};

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  count: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  icon,
  title,
  count,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-center items-center">
      <div className="flex items-center mb-2">{icon}</div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-500 text-xl mt-2">{count}</p>
    </div>
  );
};

export default ActivityMonitoring;
