"use client";
import React, { useState } from "react";
import {
  Cloud,
  PiggyBank,
  ShieldCheck,
  Server,
  Bitcoin,
  Coins,
} from "lucide-react";
import styles from "./CryptoInfographic.module.css";

const segments = [
  {
    label: "Bitcoin",
    color: "#f87171",
    icon: Bitcoin,
    description:
      "Bitcoin ist digitales Geld ohne Banken. Stell es dir wie Gold vor, das du per E-Mail versenden kannst. Es ist die erste und bekannteste Kryptowährung, die Transaktionen weltweit und zensurresistent ermöglicht.",
  },
  {
    label: "Bitcoin Security",
    color: "#06b6d4",
    icon: ShieldCheck,
    description:
      "Sicherheit steht an erster Stelle. Durch kryptografische Verfahren ist das Netzwerk extrem sicher vor Manipulationen. Dein persönlicher Schutz hängt jedoch von deinem Umgang mit Passwörtern und Schlüsseln ab.",
  },
  {
    label: "Saving",
    color: "#84cc16",
    icon: PiggyBank,
    description:
      "Krypto als Sparbuch? Viele nutzen 'Hodling' (das langfristige Halten) als Strategie. Trotz Volatilität sehen viele in Bitcoin einen Wertspeicher gegen Inflation.",
  },
  {
    label: "Token",
    color: "#a855f7",
    icon: Coins,
    description:
      "Ein Token ist mehr als nur eine Währung. Er kann Kunst (NFTs), Zugangsrechte oder Stimmrechte in einem DeFi-Protokoll repräsentieren. Tokens nutzen bestehende Blockchains wie Ethereum für ihre Funktionen.",
  },
  {
    label: "Cloud Mining",
    color: "#6366f1",
    icon: Cloud,
    description:
      "Cloud Mining ermöglicht es dir, Kryptowährungen zu schürfen, ohne teure Hardware zu besitzen. Du vermietest Rechenleistung von Rechenzentren und erhältst einen Anteil der geschürften Münzen.",
  },
  {
    label: "Mining Farm",
    color: "#fbbf24",
    icon: Server,
    description:
      "Mining Farms sind spezialisierte Rechenzentren, die große Mengen an Kryptowährungen schürfen. Sie nutzen spezialisierte Hardware (ASICs) für maximale Effizienz und Rentabilität.",
  },
];

const CryptoInfographic = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section data-theme="dark" className={styles.section}>
      <div className={styles.headerSection}>
        <h2 className={styles.mainTitle}>Kryptowährungen verstehen</h2>
        <p className={styles.subtitle}>
          Entdecke die verschiedenen Aspekte der Kryptowelt
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.cardsGrid}>
            {segments.map((segment, index) => {
              const IconComponent = segment.icon;
              return (
                <button
                  key={segment.label}
                  className={`${styles.card} ${
                    selectedIndex === index ? styles.cardActive : ""
                  }`}
                  onClick={() => setSelectedIndex(index)}
                  style={{
                    borderLeftColor: segment.color,
                  }}
                >
                  <div
                    className={styles.cardIcon}
                    style={{ color: segment.color }}
                  >
                    <IconComponent size={32} />
                  </div>
                  <h3 className={styles.cardTitle}>{segment.label}</h3>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.contentCard}>
            <div
              className={styles.colorBar}
              style={{
                background: segments[selectedIndex].color,
              }}
            ></div>
            <div className={styles.contentInner}>
              <div
                className={styles.contentIcon}
                style={{ color: segments[selectedIndex].color }}
              >
                {React.createElement(segments[selectedIndex].icon, {
                  size: 48,
                })}
              </div>
              <h2 className={styles.contentTitle}>
                {segments[selectedIndex].label}
              </h2>
              <p className={styles.contentText}>
                {segments[selectedIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoInfographic;
