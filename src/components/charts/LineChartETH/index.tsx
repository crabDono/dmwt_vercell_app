import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip
);

const lineChartData = {
  labels: [
    "Dec 2023",
    "Jan 2024",
    "Feb 2024",
    "Mar 2024",
    "Apr 2024",
    "May 2024",
    "Jun 2024",
    "Jul 2024",
    "Aug 2024",
    "Sep 2024",
    "Oct 2024",
    "Nov 2024",
    "Dec 2024",
    "Jan 2025",
    "Feb 2025",
    "Mar 2025",
    "Apr 2025",
    "May 2025",
    "Jun 2025",
    "Jul 2025",
    "Aug 2025",
    "Sep 2025",
    "Oct 2025",
  ],
  datasets: [
    {
      label: "ETH‑Kurs (Monats‑Schluss, USD)",
      data: [
        31.49, 31.26, 20.92, 17.22, 16.83, 24.24, 23.72, 35.17, 40.88, 39.18,
        36.59, 33.84, 31.49, 31.26, 20.92, 17.22, 16.83, 24.24, 23.72, 35.17,
        40.88, 39.18, 36.59,
      ],
      borderColor: "rgb(75, 192, 192)",
    },
  ],
};

const LineChartETH = () => {
  const options = {};

  return <Line options={options} data={lineChartData} />;
};

export default LineChartETH;
