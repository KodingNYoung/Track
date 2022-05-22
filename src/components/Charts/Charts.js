import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

// css
import "../../assets/css/charts.css";

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
      align: "end",
      labels: {
        pointStyle: "circle",
        usePointStyle: true,
        padding: 10,
        font: {
          family: "'Poppins', sans-serif",
          size: 14,
          weight: "700"
        },
        color: "#000",
        boxWidth: 8,
        boxHeight: 8
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: "#c4c4c4",
        font: {
          family: "'Poppins', sans-serif",
          size: 14,
          weight: 500
        }
      },
      grid: {
        display: false
      }
    },
    y: {
      ticks: {
        color: "#c4c4c4",
        font: {
          family: "'Poppins', sans-serif",
          size: 14,
          weight: 500
        }
      },
      grid: {
        display: false
      }
    }
  },
  categoryPercentage: 0.4
};

export const BarChart = () => {
  return (
    <div className="chart-container">
      <div className="chart">
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
              "Dec"
            ],
            datasets: [
              {
                label: "Income",
                data: [10, 34, 12, 65, 12, 43, 9, 45, 76, 35, 4, 23],
                backgroundColor: "#00b528",
                borderRadius: 10,
                barPercentage: 0.5
              },
              {
                label: "Expenses",
                data: [90, 34, 50, 65, 12, 43, 9, 5, 56, 14, 4, 23],
                backgroundColor: "#b60000",
                borderRadius: 10,
                barPercentage: 0.5
              }
            ]
          }}
          options={options}
        />
      </div>
    </div>
  );
};
