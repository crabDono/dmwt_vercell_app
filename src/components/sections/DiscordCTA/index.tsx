"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./DiscordCTA.module.css";

const DiscordCTA = () => {
  const discordInviteLink = "https://discord.gg/YeVyVHEQgg";

  return (
    <section className={styles.ctaSection} data-theme="dark">
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 C300,0 900,120 1200,60 L1200,0 L0,0 Z"
            fill="#e8e8e8"
          />
        </svg>
      </div>
      <div className={styles.glowEffect} aria-hidden="true"></div>

      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.memberBadge}>
            <span className={styles.onlineIndicator}></span>
            <span className={styles.memberCount}>647+ Mitglieder online</span>
          </div>

          <h2 className={styles.title}>Werde Teil der Flotte!</h2>
          <p className={styles.description}>
            Tausche dich in Echtzeit mit anderen Kadetten und Experten aus. Hol
            dir Hilfe, diskutiere Markt-Updates und verpasse keine Mission.
          </p>

          <div className={styles.buttonWrapper}>
            <Link
              href={discordInviteLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.discordButton}
            >
              <Image src="/discord-white.png" alt="" width={24} height={24} />
              <span>Jetzt dem Server beitreten</span>
            </Link>
            <p className={styles.subButtonText}>Kostenlos & für alle offen</p>
          </div>
        </div>

        <div className={styles.visualContent}>
          <Image
            src="/discord.png"
            alt="Discord Community"
            width={400}
            height={400}
            className={styles.floatingIcon}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default DiscordCTA;
