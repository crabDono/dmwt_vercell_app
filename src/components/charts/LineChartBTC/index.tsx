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
      label: "BTC-Kurs (Monats-Schluss, USD)",
      data: [
        16547,
        16807,
        23199,
        25156,
        28688,
        28312, // Nov22 - Apr23
        27010,
        30150,
        29320,
        28910,
        27005,
        34520, // May23 - Oct23
        34010,
        42900,
        45001,
        61198,
        71333,
        60636, // Nov23 - Apr24
        67489,
        62678,
        64619,
        58970,
        63329,
        70215, // May24 - Oct24
        96449,
        93429,
        109071,
        84252,
        98040,
        88020, // Nov24 - Apr25
        93210,
        100120,
        113450,
        125725,
        120000,
        108241, // May25 - Oct25
      ],
      borderColor: "rgb(75, 192, 192)",
    },
  ],
};

const LineChartBTC = () => {
  const options = {};

  return <Line options={options} data={lineChartData} />;
};

export default LineChartBTC;
