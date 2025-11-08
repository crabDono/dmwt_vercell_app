"use client";

import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { AccordionItem } from "../../features/Accordion";
import { Accordion } from "../../features/Accordion";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/triple.svg" // Pfad anpassen, falls nötig
              alt="Logo"
              width={80} // Größe angepasst
              height={80}
              className="rounded-full"
            />
          </Link>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} IMMM Finances
          </p>
        </div>

        <hr className={styles.line} />

        <div className={styles.accordionContainer}>
          <Accordion
            multiple={false}
            className={styles.accordion} // Eigene Klasse für das Accordion
          >
            <AccordionItem id="item-1" title="Impressum" defaultOpen>
              <p className={styles.accordionContent}>
                Das ist der Inhalt des ersten Items. Hier kannst du beliebige
                React-Elemente platzieren — z. B. Texte, Listen oder Formulare.
              </p>
            </AccordionItem>

            <AccordionItem id="item-2" title="Terms & Conditions">
              <ul className={styles.accordionList}>
                <li>Punkt A</li>
                <li>Punkt B</li>
                <li>Punkt C</li>
              </ul>
            </AccordionItem>

            <AccordionItem id="item-3" title="Privacy Policy">
              <div className={styles.accordionContent}>
                <strong>Hinweis:</strong> Du kannst beliebig viele Items
                hinzufügen.
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </footer>
  );
}
