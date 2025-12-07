"use client";
import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styles from "../Charts.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const historicalData = [
  { year: "2010", price: 0.09 },
  { year: "2011", price: 0.3 },
  { year: "2012", price: 5.28 },
  { year: "2013", price: 13.3 },
  { year: "2014", price: 754.22 },
  { year: "2015", price: 314.25 },
  { year: "2016", price: 434.33 },
  { year: "2017", price: 998.33 },
  { year: "2018", price: 13657.2 },
  { year: "2019", price: 3843.52 },
  { year: "2020", price: 7200.17 },
  { year: "2021", price: 29374.15 },
  { year: "2022", price: 47686.81 },
  { year: "2023", price: 16625.08 },
  { year: "2024", price: 44167.33 },
  { year: "2025", price: 94419.76 },
];

const LineChartBTC = () => {
  const chartRef = useRef<any>(null);
  const [chartData, setChartData] = useState<any>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);

    // Start: Ein TIEFERES Blau (Dark Blue) und weniger Deckkraft (0.5 statt 0.9)
    // Das wirkt "nicht so solide" und deutlich dunkler als die Linie selbst.
    gradient.addColorStop(0, "rgba(29, 78, 216, 0.5)");

    // Mitte: Schneller Übergang ins fast Transparente
    gradient.addColorStop(0.5, "rgba(29, 78, 216, 0.1)");

    // Ende: Hintergrundfarbe (nahtloser Übergang)
    gradient.addColorStop(1, "rgba(11, 14, 29, 0)");

    setChartData({
      labels: historicalData.map((entry) => entry.year),
      datasets: [
        {
          label: "Bitcoin Price",
          data: historicalData.map((entry) => entry.price),
          borderColor: "#60A5FA",
          borderWidth: 3,
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: "#0b0e1d", // Punkt-Inneres passt sich Hintergrund an
          pointBorderColor: "#60A5FA",
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        backgroundColor: "rgba(29, 12, 11, 0.95)", // Tooltip fast wie Hintergrund
        titleColor: "#94a3b8",
        bodyColor: "#ffffff",
        borderColor: "white",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function (context: any) {
            return new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(context.parsed.y);
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        ticks: {
          color: "#64748b",
          font: { size: 11 },
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.03)",
          drawBorder: false,
        },
        ticks: { display: false },
        beginAtZero: true,
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
  };

  return (
    // Ich habe hier einen Wrapper hinzugefügt, um den grauen Hintergrund zu simulieren,
    // falls du die Komponente direkt testest.
    <div className={styles.pageBackground}>
      <div className={styles.chartContainer}>
        <div className={styles.header}>
          <div>
            <span className={styles.titleLabel}>BITCOIN (2025)</span>
            <h2 className={styles.bigNumber}>$94,419</h2>
          </div>
        </div>
        <div className={styles.canvasWrapper}>
          <Line ref={chartRef} options={options} data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default LineChartBTC;
