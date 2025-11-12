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
  data: [number, number][] | null; // Array von [timestamp, price] Tupeln
}

const LineChartSOL = ({ data: apiData }: LineChartProps) => {
  // Wenn keine Daten da sind, zeige nichts oder einen Ladezustand
  if (!apiData) {
    return <div>Daten werden geladen...</div>;
  }

  const chartData = {
    labels: apiData.map((entry) => new Date(entry[0]).toLocaleDateString()), // Timestamps in lesbare Daten umwandeln
    datasets: [
      {
        label: "Solana Kurs (EUR)",
        data: apiData.map((entry) => entry[1]), // Nur die Preise verwenden
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
        text: "Solana (SOL) Kursverlauf - 365 Tage",
      },
    },
  };

  return <Line options={options} data={chartData} />;
};

export default LineChartSOL;
