"use client";

import dynamic from "next/dynamic";
import styles from "./Zeitreise.module.css";

const ZeitreiseContent = dynamic(() => import("./ZeitreiseContent"), {
  ssr: false,
  loading: () => (
    <section className={styles.zeitreiseSection} data-theme="dark">
      <div className={styles.header}>
        <h2 className={styles.title}>Bitcoin Zeitreise</h2>
        <p className={styles.subtitle}>Lädt... </p>
      </div>
    </section>
  ),
});

export default function Zeitreise() {
  return <ZeitreiseContent />;
}
