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
    "Nov 2022",
    "Dec 2022",
    "Jan 2023",
    "Feb 2023",
    "Mar 2023",
    "Apr 2023",
    "May 2023",
    "Jun 2023",
    "Jul 2023",
    "Aug 2023",
    "Sep 2023",
    "Oct 2023",
    "Nov 2023",
    "Dec 2023",
    "Jan 2024",
    "Feb 2024",
    "Mar 2024",
    "Apr 2024",
    "May 2024",
    "Jun 2024",
    "Jul 2024",
    "Aug 2024",
    "Sep 2024",
    "Oct 2024",
    "Nov 2024",
    "Dec 2024",
    "Jan 2025",
    "Feb 2025",
    "Mar 2025",
    "Apr 2025",
    "May 2025",
    "Jun 2025",
    "Jul 2025",
    "Aug 2025",
    "Sep 2025",
    "Oct 2025",
  ],
  datasets: [
    {
      label: "SOL‑Kurs (Monats‑Schluss, USD)",
      data: [
        14,
        10,
        23,
        21,
        21,
        22, // Nov22 – Apr23 (realistische Näherung)
        21,
        19,
        23,
        19,
        21,
        39, // May23 – Oct23
        59,
        101,
        97,
        125,
        202,
        127, // Nov23 – Apr24
        166,
        146,
        172,
        135,
        153,
        168, // May24 – Oct24
        180,
        189,
        240,
        170,
        125,
        147, // Nov24 – Apr25 (erfunden)
        156,
        154,
        172,
        201,
        209,
        194, // May25 – Oct25 (erfunden)
      ],
      borderColor: "rgb(75, 192, 192)",
    },
  ],
};

const LineChartSOL = () => {
  const options = {};

  return <Line options={options} data={lineChartData} />;
};

export default LineChartSOL;
