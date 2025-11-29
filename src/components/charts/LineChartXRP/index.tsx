"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "../Charts.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Typ für die Props definieren
interface LineChartProps {
  data: [number, number][] | null;
}

const LineChartXRP = ({ data: apiData }: LineChartProps) => {
  // Wenn keine Daten da sind, zeige einen Ladezustand
  if (!apiData) {
    return <div>Daten werden geladen...</div>;
  }

  const chartData = {
    labels: apiData.map((entry) =>
      new Date(entry[0]).toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "short",
      })
    ),
    datasets: [
      {
        label: "XRP Kurs (EUR)",
        data: apiData.map((entry) => entry[1]),
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "XRP (XRP) Kursverlauf - 365 Tage",
      },
    },
  };

  return (
    <Line
      options={options}
      data={chartData}
      className={styles.chartContainer}
    />
  );
};

export default LineChartXRP;
