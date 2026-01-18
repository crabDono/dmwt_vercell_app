"use client";

import { useState } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Link href="/" className={styles.logoLink}>
            <Image src="/triple.svg" alt="Logo" width={80} height={80} />
          </Link>
          
          <p className={styles.disclaimer}>
            Studentisches Lehrprojekt:<br />
            Diese Website ist eine Studierendenarbeit der Hochschule Reutlingen<br />
            zu Lehr- und Lernzwecken. Alle Inhalte, Produkte und Dienstleistungen sind fiktiv und nicht geprüft.<br />
            Bitte geben Sie keine sensiblen oder personenbezogene Daten<br />
            in die Formulare der Website ein.{" "}
            <Link href="/impressum" className={styles.impressumLink}>
              Mehr Informationen im Impressum →
            </Link>
          </p>

          <div className={styles.appButtons}>
            <Link href="#" className={styles.appButton}>
              <Image src="/google-play.svg" alt="Get it on Google Play" width={135} height={40} />
            </Link>
            <Link href="#" className={styles.appButton}>
              <Image src="/app-store.svg" alt="Download on the App Store" width={135} height={40} />
            </Link>
          </div>

          <p className={styles.copyright}>
            © {new Date().getFullYear()} MMM Finances
          </p>
        </div>

        
      </div>
    </footer>
  );
}