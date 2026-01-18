"use client";

import { useEffect, useRef } from "react";
import styles from "./CommunityStats.module.css";
import Image from "next/image";

const CommunityStats = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent = (totalScroll / windowHeight) * 100;

      if (progressRef.current) {
        progressRef.current.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.section} data-theme="dark">
      <div className={styles.container}>
        <div className={styles.progressBar}>
          <div ref={progressRef} className={styles.progressFill}></div>
        </div>

        <h2 className={styles.title}>Der Gemeinschafts-Fokus</h2>

        <div className={styles.contentWrapper}>
          <div className={styles.statsGrid}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/users.svg" alt="Users" width={32} height={32} />
              </div>
              <div className={styles.number}>1.500+</div>
              <div className={styles.label}>Aktive Kadetten</div>
              <div className={styles.description}>
                Menschen, die das Training begonnen haben und ihren finanziellen
                Start vorbereiten.
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <Image
                  src="/discord.svg"
                  alt="Discord"
                  width={32}
                  height={32}
                />
              </div>
              <div className={styles.number}>200+</div>
              <div className={styles.label}>Crew im Funkverkehr</div>
              <div className={styles.description}>
                Täglicher Austausch auf unserer Frequenz. Hier fliegt niemand
                allein.
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/lock.svg" alt="Security" width={32} height={32} />
              </div>
              <div className={styles.number}>100%</div>
              <div className={styles.label}>Missions-Autonomie</div>
              <div className={styles.description}>
                Keine Befehle von Banken. Wir navigieren unabhängig und
                provisionsfrei.
              </div>
            </div>

            <div className={`${styles.card} ${styles.cardWide}`}>
              <div className={styles.icon}>
                <Image src="/users.svg" alt="Content" width={32} height={32} />
              </div>
              <div className={styles.number}>50+</div>
              <div className={styles.label}>Flug-Module</div>
              <div className={styles.description}>
                Zugriff auf das komplette Handbuch – von der Startvorbereitung
                bis zu komplexen Orbital-Manövern (Investments).
              </div>
            </div>

            <div className={`${styles.card} ${styles.cardWide}`}>
              <div className={styles.icon}>
                <Image src="/users.svg" alt="Rating" width={32} height={32} />
              </div>
              <div className={styles.number}>4.9 / 5</div>
              <div className={styles.label}>System-Status</div>
              <div className={styles.description}>
                Die Flotte meldet: "Systeme stabil". Basierend auf dem Feedback
                erfolgreicher Absolventen.
              </div>
            </div>
          </div>

          <div className={styles.astronautWrapper}>
            <Image
              src="/astronaut_2.png"
              alt="Community Astronaut"
              width={400}
              height={800}
              className={styles.astronautImage}
              priority
            />
          </div>
        </div>
      </div>
      <div className={styles.waveDivider}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="#e8e8e8"
          />
        </svg>
      </div>
    </section>
  );
};

export default CommunityStats;
