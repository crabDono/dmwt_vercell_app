"use client";

import { useState, useEffect } from "react";
import styles from "./Infographic.module.css";
import LineChartBTC from "../../charts/LineChartBTC";
import LineChartETH from "../../charts/LineChartETH";
import LineChartSOL from "../../charts/LineChartSOL";
import LineChartUSDT from "../../charts/LineChartUSDT";
import LineChartUSDC from "../../charts/LineChartUSDC";
import LineChartBNB from "../../charts/LineChartBNB";
import LineChartXRP from "../../charts/LineChartXRP";
import LineChartADA from "../../charts/LineChartADA";
import LineChartDOT from "../../charts/LineChartDOT";
import LineChartDOGE from "../../charts/LineChartDOGE";

// Typdefinition für die Chart-Daten
type ChartData = [number, number][]; // Array von [timestamp, price] Tupeln

const Infographic = () => {
  const [chartData, setChartData] = useState<{
    btc: ChartData | null;
    eth: ChartData | null;
    sol: ChartData | null;
    usdt: ChartData | null;
    usdc: ChartData | null;
    bnb: ChartData | null;
    xrp: ChartData | null;
    ada: ChartData | null;
    dot: ChartData | null;
    doge: ChartData | null;
  }>({
    btc: null,
    eth: null,
    sol: null,
    usdt: null,
    usdc: null,
    bnb: null,
    xrp: null,
    ada: null,
    dot: null,
    doge: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/coingecko");
        if (!response.ok) {
          throw new Error("Daten konnten nicht geladen werden.");
        }
        const data = await response.json();
        setChartData({
          btc: data.btc,
          eth: data.eth,
          sol: data.sol,
          usdt: data.usdt,
          usdc: data.usdc,
          bnb: data.bnb,
          xrp: data.xrp,
          ada: data.ada,
          dot: data.dot,
          doge: data.doge,
        });
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Ein Fehler ist aufgetreten."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchChartData();
  }, []);

  // Pagination state für die Charts
  const charts = [
    { id: "btc", node: <LineChartBTC data={chartData.btc} /> },
    { id: "eth", node: <LineChartETH data={chartData.eth} /> },
    { id: "sol", node: <LineChartSOL data={chartData.sol} /> },
    { id: "usdt", node: <LineChartUSDT data={chartData.usdt} /> },
    { id: "usd-coin", node: <LineChartUSDC data={chartData.usdc} /> },
    { id: "binancecoin", node: <LineChartBNB data={chartData.bnb} /> },
    { id: "xrp", node: <LineChartXRP data={chartData.xrp} /> },
    { id: "ada", node: <LineChartADA data={chartData.ada} /> },
    { id: "dot", node: <LineChartDOT data={chartData.dot} /> },
    { id: "doge", node: <LineChartDOGE data={chartData.doge} /> },
  ];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + charts.length) % charts.length);
  const next = () => setCurrent((c) => (c + 1) % charts.length);

  return (
    <section className={styles.infografic} id="infographic">
      <div className={styles.container}>
        <h2 className={styles.title}>Kurs Veränderungen</h2>
        <p className={styles.subtitle}>
          Die folgende Grafik zeigt die Entwicklung der Kurse über die
          vergangenen 365 Tage.
        </p>
        <p className={styles.subsubtitle}>
          Die Werte basieren auf historischen Tageskursen und dienen als
          Orientierung für die kurzfristige Preisentwicklung.
        </p>

        <div
          className={styles.chartArea}
          role="region"
          aria-roledescription="carousel"
          aria-label="Charts"
        >
          <button
            className={`${styles.sideArrow} ${styles.left}`}
            onClick={prev}
            aria-label="Vorheriges Chart"
          >
            ←
          </button>

          <div className={styles.chartWrapper} key={charts[current].id}>
            {isLoading && (
              <div className={styles.loadingIndicator}>Lade Chart-Daten...</div>
            )}
            {error && <div className={styles.errorIndicator}>{error}</div>}
            {!isLoading && !error && charts[current].node}
          </div>

          <button
            className={`${styles.sideArrow} ${styles.right}`}
            onClick={next}
            aria-label="Nächstes Chart"
          >
            →
          </button>
        </div>

        <div className={styles.carouselControls}>
          <div className={styles.dots}>
            {charts.map((c, i) => (
              <button
                key={c.id}
                className={`${styles.dot} ${
                  i === current ? styles.activeDot : ""
                }`}
                onClick={() => setCurrent(i)}
                aria-label={`Gehe zu ${c.id.toUpperCase()}`}
                aria-current={i === current}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infographic;
