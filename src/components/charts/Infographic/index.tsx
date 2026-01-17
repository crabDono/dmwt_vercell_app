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
    label: "Cloud Mining",
    color: "#6366f1",
    icon: Cloud,
    description:
      "Cloud Mining ermöglicht es dir, Kryptowährungen zu schürfen, ohne teure Hardware zu besitzen. Du vermietest Rechenleistung von Rechenzentren und erhältst einen Anteil der geschürften Münzen.",
  },
  {
    label: "Saving",
    color: "#84cc16",
    icon: PiggyBank,
    description:
      "Durch Staking oder Lending kannst du deine Kryptowährungen sparen und gleichzeitig passive Einnahmen generieren. Viele Plattformen bieten attraktive Zinssätze für deine digitalen Assets.",
  },
  {
    label: "Bitcoin Security",
    color: "#06b6d4",
    icon: ShieldCheck,
    description:
      "Die Sicherheit von Bitcoin basiert auf der Blockchain-Technologie und kryptografischen Algorithmen. Dein Private Key ist der Schlüssel zu deinen Vermögenswerten und sollte niemals weitergegeben werden.",
  },
  {
    label: "Mining Farm",
    color: "#fbbf24",
    icon: Server,
    description:
      "Mining Farms sind spezialisierte Rechenzentren, die große Mengen an Kryptowährungen schürfen. Sie nutzen spezialisierte Hardware (ASICs) für maximale Effizienz und Rentabilität.",
  },
  {
    label: "Bitcoin",
    color: "#f87171",
    icon: Bitcoin,
    description:
      "Bitcoin ist die erste und bekannteste Kryptowährung. Mit einem dezentralen Netzwerk und begrenztem Angebot (21 Millionen) hat Bitcoin sich als digitales Gold etabliert.",
  },
  {
    label: "Token",
    color: "#a855f7",
    icon: Coins,
    description:
      "Tokens sind digitale Assets auf Blockchains wie Ethereum. Sie können Utility-Token, Security-Token oder Governance-Token sein und verschiedene Funktionen im Ökosystem erfüllen.",
  },
];

const CryptoInfographic = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section data-theme="dark">
      <div className={styles.headerSection}>
        <h2 className={styles.mainTitle}>Kryptowährungen verstehen</h2>
        <p className={styles.subtitle}>
          Entdecke die verschiedenen Aspekte der Kryptowelt
        </p>
      </div>

      <div className={styles.container}>
        {/* Linke Seite - Interaktive Karten */}
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

        {/* Rechte Seite - Content */}
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
