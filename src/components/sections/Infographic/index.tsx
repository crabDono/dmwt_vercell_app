"use client";

import { useState } from "react";
import LineChartBTC from "../../charts/LineChartBTC";
import LineChartETH from "../../charts/LineChartETH";
import LineChartSOL from "../../charts/LineChartSOL";
import InfoCard from "../../features/InfoCard";
import styles from "./Infographic.module.css";

const Infographic = () => {
  // Pagination state für die Charts
  const charts = [
    { id: "btc", node: <LineChartBTC /> },
    { id: "eth", node: <LineChartETH /> },
    { id: "sol", node: <LineChartSOL /> },
  ];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + charts.length) % charts.length);
  const next = () => setCurrent((c) => (c + 1) % charts.length);

  return (
    <section className={styles.infografic} id="infographic">
      <div className={styles.container}>
        <h2 className={styles.title}>Kurs Veränderungen</h2>
        <p className={styles.subtitle}>
          Die folgende Grafik zeigt die Entwicklung des Bitcoin-Kurses über die
          vergangenen Monate. Anhand der Daten lassen sich Trends,
          Wachstumsphasen sowie Korrekturen im Marktverlauf nachvollziehen.
        </p>
        <p className={styles.subsubtitle}>
          Die Werte basieren auf historischen Monatskursen und dienen als
          Orientierung für die langfristige Preisentwicklung.
        </p>

        {/* Chart-Bereich: zeigt jeweils ein Chart */}
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
            {charts[current].node}
          </div>
          <button
            className={`${styles.sideArrow} ${styles.right}`}
            onClick={next}
            aria-label="Nächstes Chart"
          >
            →
          </button>
        </div>

        {/* Controls / Pagination für Charts */}
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

        <div className={styles.grid}>
          {/* Falls zusätzlich noch Karten oder andere Elemente gezeigt werden sollen,
              kannst du sie hier platzieren. */}
          {/* <InfoCard ... /> */}
        </div>
      </div>
    </section>
  );
};

export default Infographic;
