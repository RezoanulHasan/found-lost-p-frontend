"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ActivityChartProps {
  foundItems: number;
  lostItems: number;
  claims: number;
}

const ActivityChart: React.FC<ActivityChartProps> = ({
  foundItems,
  lostItems,
  claims,
}) => {
  const data = {
    labels: ["Found Items", "Lost Items", "Claims"],
    datasets: [
      {
        label: "Count",
        data: [foundItems, lostItems, claims],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Activity Monitoring",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ActivityChart;
