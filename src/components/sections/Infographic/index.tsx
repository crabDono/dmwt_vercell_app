"use client";

import InfoCard from "../../features/InfoCard";
import styles from "./Infographic.module.css";

const Infographic = () => {
  return (
    <section className={styles.infografic}>
      <div className={styles.container}>
        <h2 className={styles.title}>Lorem ipsum dolor sit amet</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          <br /> sed diam nonumy eirmod tempor invidunt ut labore et dolore
        </p>
        <p className={styles.subsubtitle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </p>
        <div className={styles.grid}>
          <InfoCard
            title="Grundlagen"
            subtitle="Sparen & Budget"
            body="Lerne die Basics: Budget erstellen, Ziel setzen, Ausgaben checken."
          />
          <InfoCard
            title="Investieren"
            subtitle="Langfristig wachsen"
            body="Einfach starten: ETFs, Diversifikation und Kosten verstehen."
          />
          <InfoCard
            title="Risikomanagement"
            subtitle="Schutz & Planung"
            body="Notgroschen, Versicherung und Notfallpläne — kurz erklärt."
          />
        </div>
      </div>
    </section>
  );
};

export default Infographic;
