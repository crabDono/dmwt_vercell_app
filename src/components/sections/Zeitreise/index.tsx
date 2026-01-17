"use client";

import dynamic from "next/dynamic";
import styles from "./Zeitreise.module.css";

const ZeitreiseContent = dynamic(() => import("./ZeitreiseContent"), {
  ssr: false,
  loading: () => (
    <section className={styles.zeitreiseSection} data-theme="dark">
      <div className={styles.header}>
        <h1 className={styles.title}>History of Bitcoin</h1>
      </div>
    </section>
  ),
});

export default function Zeitreise() {
  return <ZeitreiseContent />;
}
