import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { currencySign } from "../../utils";

// css
import "../../assets/css/charts.css";

// registering components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const BarChart = props => {
  const { datasets, labels } = props;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          padding: 25,
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
          },
          callback: function (value, index, ticks) {
            return index % 2 === 0 ? currencySign?.naira + value : null;
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
  // const datasets = Object.keys(data.data).map(type => {
  //   return {
  //     label: type,
  //     data: data.data[type],
  //     backgroundColor: type === "income" ? "#00b528" : "#FC0404"
  //   };
  // });
  return (
    <div className="chart-container">
      <Bar
        data={{
          labels: labels,
          datasets: datasets
        }}
        options={options}
      />
    </div>
  );
};

export const DoughnutChart = props => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(0, 0, 0, 1)"
        ],
        circumference: 180,
        rotation: -90
      }
    ]
  };
  const options = {
    plugins: {
      legend: {
        position: "right",
        align: "middle",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          color: "#000",
          boxWidth: 8,
          boxHeight: 8,
          font: {
            family: "'Poppins', sans-serif",
            size: 14,
            weight: "700"
          }
        }
      },
      title: {
        display: true,
        text: "TOTAL INCOME",
        position: "bottom",
        color: "#000",
        font: {
          family: "'Poppins', sans-serif",
          size: 20,
          weight: "600"
        },
        padding: {
          top: -50
        },
        fullSize: false
      },
      tooltip: {
        callbacks: {
          label: tooltipItem => {
            const items = tooltipItem.dataset.data;
            const currentValue = items?.[tooltipItem?.dataIndex];
            const total = items.reduce(function (previousValue, currentValue) {
              return previousValue + currentValue;
            });
            var percentage = Math.floor((currentValue / total) * 100 + 0.5);
            return `${tooltipItem?.label}: ${percentage}%`;
          }
        }
      }
    }
  };
  return (
    <div className="chart-container doughnut">
      <Doughnut data={data} options={options} />
    </div>
  );
};
