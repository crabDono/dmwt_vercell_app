"use client";

import { useEffect, useRef } from "react";
import styles from "./Stats.module.css";
import Image from "next/image";

const Stats = () => {
  // 1. Refs für den Balken UND die Rakete erstellen
  const barRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 2. Scroll-Fortschritt berechnen
      const totalScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      // Verhindert Division durch 0
      if (windowHeight === 0) return;

      const scrollPercent = (totalScroll / windowHeight) * 100;

      // 3. Styles direkt setzen (performant ohne Re-Render)
      if (barRef.current) {
        barRef.current.style.width = `${scrollPercent}%`;
      }
      if (rocketRef.current) {
        rocketRef.current.style.left = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialer Aufruf

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            {/* Refs verbinden */}
            <div ref={barRef} className={styles.progressFill}></div>
            <div ref={rocketRef} className={styles.rocket}>
              🚀
            </div>
          </div>
        </div>

        <h2 className={styles.title}>Du bist nicht allein im Universum</h2>
        <p className={styles.subtitle}>
          Du fliegst nicht ins Ungewisse. Schließ dich einer wachsenden Flotte
          an, die ihre Ziele erreicht.
        </p>

        <div className={styles.statsGrid}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image src="users.svg" alt="Users" width={40} height={40} />
            </div>
            <div className={styles.number}>1.500+</div>
            <div className={styles.label}>Quiz-Teilnehmer</div>
            <div className={styles.description}>
              Menschen, die ihren finanziellen Status Quo analysiert und den
              Start eingeleitet haben
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <Image src="discord.svg" alt="Discord" width={40} height={40} />
            </div>
            <div className={styles.number}>200+</div>
            <div className={styles.label}>Discord User</div>
            <div className={styles.description}>Kadetten und Profis</div>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <Image src="lock.svg" alt="Lock" width={40} height={40} />
            </div>
            <div className={styles.number}>100%</div>
            <div className={styles.label}>Unabhängige Bildung</div>
            <div className={styles.description}>
              Wissen ohne Bank-Interessen
            </div>
          </div>
        </div>

        <div className={styles.astronaut}>
          <Image
            src="/astronauten4.png"
            alt="Astronaut"
            width={400}
            height={400}
            className={styles.astronautImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
