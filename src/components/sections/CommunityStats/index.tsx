"use client";

import styles from "./CommunityStats.module.css";
import Image from "next/image";

const CommunityStats = () => {
  return (
    <section className={styles.section} data-theme="dark">
      <div className={styles.container}>
        {/* Progress Bar / Decorator */}
        <div className={styles.progressBar}>
          <div className={styles.progressFill}></div>
        </div>

        <h2 className={styles.title}>Der Gemeinschafts-Fokus</h2>

        <div className={styles.contentWrapper}>
          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            {/* Top Row: 3 Cards */}
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/users.svg" alt="Users" width={32} height={32} />
              </div>
              <div className={styles.number}>500.000+</div>
              <div className={styles.label}>Quiz-Teilnehmer</div>
              <div className={styles.description}>Lorem Ipsum</div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/users.svg" alt="Users" width={32} height={32} />
              </div>
              <div className={styles.number}>500.000+</div>
              <div className={styles.label}>Quiz-Teilnehmer</div>
              <div className={styles.description}>Lorem Ipsum</div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/users.svg" alt="Users" width={32} height={32} />
              </div>
              <div className={styles.number}>500.000+</div>
              <div className={styles.label}>Quiz-Teilnehmer</div>
              <div className={styles.description}>Lorem Ipsum</div>
            </div>

            {/* Bottom Row: 2 Wider Cards */}
            <div className={`${styles.card} ${styles.cardWide}`}>
              <div className={styles.icon}>
                <Image src="/users.svg" alt="Users" width={32} height={32} />
              </div>
              <div className={styles.number}>500.000+</div>
              <div className={styles.label}>Quiz-Teilnehmer</div>
              <div className={styles.description}>Lorem Ipsum</div>
            </div>
            <div className={`${styles.card} ${styles.cardWide}`}>
              <div className={styles.icon}>
                <Image src="/users.svg" alt="Users" width={32} height={32} />
              </div>
              <div className={styles.number}>500.000+</div>
              <div className={styles.label}>Quiz-Teilnehmer</div>
              <div className={styles.description}>Lorem Ipsum</div>
            </div>
          </div>

          {/* Astronaut Side Image */}
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
    </section>
  );
};

export default CommunityStats;
