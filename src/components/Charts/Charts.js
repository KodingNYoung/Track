import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// registering components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
  barThickness: 10,
  borderRadius: 10,
};

export const BarChart = () => {
  return (
    <Bar
      data={{
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Dataset 1",
            data: [10, 34, 12, 65, 12, 43, 9, 45, 76, 35, 4, 23],
            backgroundColor: "rgba(255, 99, 132)",
          },
          {
            label: "Dataset 2",
            data: [90, 34, 50, 65, 12, 43, 9, 5, 56, 14, 4, 23],
            backgroundColor: "rgba(53, 162, 235)",
          },
        ],
      }}
      options={options}
    />
  );
};
