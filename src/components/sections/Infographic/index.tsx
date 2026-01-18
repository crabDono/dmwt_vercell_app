"use client";

import styles from "./Infographic.module.css";
import LineChartBTC from "../../charts/LineChartBTC";

const Infographic = () => {
  return (
    <section className={styles.infografic} id="infographic">
      <div className={styles.container}>
        <h2 className={styles.title}>Kurs Veränderungen</h2>
        <p className={styles.subtitle}>
          Ob Schubkraft oder Schwerkraft – nutze jede <br /> Marktbewegung als
          Antrieb für dein Depot.
        </p>

        <div
          className={styles.chartArea}
          role="region"
          aria-roledescription="carousel"
          aria-label="Charts"
        >
          <LineChartBTC />
        </div>
      </div>
    </section>
  );
};

export default Infographic;
