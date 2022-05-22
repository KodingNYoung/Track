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
  categoryPercentage: 0.4,
  borderRadius: 10,
  barPercentage: 0.5
};

export const BarChart = props => {
  const { data } = props;
  console.log(data);
  const datasets = Object.keys(data.data).map(type => {
    return {
      label: type,
      data: data.data[type],
      backgroundColor: type === "income" ? "#00b528" : "#b60000"
    };
  });
  return (
    <div className="chart-container">
      <div className="chart">
        <Bar
          data={{
            labels: data.labels,
            datasets: datasets
          }}
          options={options}
        />
      </div>
    </div>
  );
};
