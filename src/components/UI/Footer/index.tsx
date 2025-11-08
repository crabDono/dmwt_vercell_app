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
        <div className={styles.logo}>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="triple.svg"
              alt="Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </Link>
          <div className={styles.text_container}>
            <p className={styles.subtitle}>
              © {new Date().getFullYear()} IMMM Finances
            </p>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <div className="p-6">
        <Accordion
          multiple={false}
          className="w-full max-w-2xl bg-white shadow rounded-lg"
        >
          <AccordionItem id="item-1" title="Impressum" defaultOpen>
            <p className="text-sm text-gray-700">
              Das ist der Inhalt des ersten Items. Hier kannst du beliebige
              React-Elemente platzieren — z. B. Texte, Listen oder Formulare.
            </p>
          </AccordionItem>

          <AccordionItem id="item-2" title="Terms & Conditions">
            <ul className="list-disc pl-5 text-sm text-gray-700">
              <li>Punkt A</li>
              <li>Punkt B</li>
              <li>Punkt C</li>
            </ul>
          </AccordionItem>

          <AccordionItem id="item-3" title="Privacy Policy">
            <div className="text-sm text-gray-700">
              <strong>Hinweis:</strong> Du kannst beliebig viele Items
              hinzufügen.
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </footer>
  );
}
