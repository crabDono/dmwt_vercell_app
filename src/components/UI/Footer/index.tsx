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
                Angaben gemäß § 5 TMG <br />
                Dieses Projekt ist ein studentisches Projekt im Rahmen des
                Studiengangs Digitale Medien und Webtechnologien an der
                Hochschule Reutlingen <br /> <br />
                <b>Projekt-Team</b> <br />
                <ul className={styles.accordionList}>
                  <li>Maximilian Schichov</li>
                  <li>Meik Gaab</li>
                  <li>Michael Ott</li>
                </ul>
                <br />
                <b>Anschrift:</b> <br />
                Alteburgstraße 150, 72762 Reutlingen <br /> <br />
                <b>Kontakt:</b>
                <ul className={styles.accordionList}>
                  <li>maximilian.schichov@student.reutlingen-university.de</li>
                  <li>meik.gaab@student.reutlingen-university.de</li>
                  <li>michael.ott@student.reutlingen-university.de</li>
                </ul>
                <br /> <br />
                <b>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</b>{" "}
                <br />
                Maximilian Schichov, Meik Gaab, Michael Ott <br /> <br />
                <b>Kursleitung</b>: <br /> Prof. Dr.-Ing. habil. Natividad
                Martínez Madrid, Prof. Dipl.-Ing. Anja <br /> <br />
                <b>Haftungsausschluss (Disclaimer):</b>
                <ul className={styles.accordionList}>
                  <li>
                    1. Inhalt des Onlineangebotes Dies ist ein studentisches
                    Übungsprojekt. Die Inhalte dienen ausschließlich
                    Lernzwecken. Wir übernehmen keinerlei Gewähr für die
                    Aktualität, Korrektheit, Vollständigkeit oder Qualität der
                    bereitgestellten Informationen (insbesondere bei den Finanz-
                    und Krypto-Themen).
                  </li>
                  <li>
                    2. Keine Anlageberatung Die auf dieser Webseite
                    bereitgestellten Inhalte, Rechner ("Zeitreise") und
                    Quizfragen stellen keine Anlageberatung oder Empfehlung zum
                    Kauf oder Verkauf von Kryptowährungen dar.
                  </li>
                </ul>
                <br />
              </p>
            </AccordionItem>
            <AccordionItem id="item-2" title="Terms & Conditions">
              <div className={styles.accordionContent}>
                1. <strong>Allgemeines</strong> Diese Webseite dient
                ausschließlich Bildungs- und Unterhaltungszwecken. Durch die
                Nutzung der Webseite erklären Sie sich mit diesen Bedingungen
                einverstanden. <br />
                2. <strong>WICHTIG:</strong> Keine Anlageberatung
                (Haftungsausschluss) Die Inhalte dieser Webseite (insbesondere
                der "Zeitreise"-Rechner, Quiz-Inhalte und Blogartikel) stellen
                keine Finanz-, Anlage- oder Rechtsberatung dar. Alle
                Berechnungen sind hypothetisch. Vergangene Kursentwicklungen von
                Bitcoin oder anderen Kryptowährungen garantieren keine
                zukünftigen Gewinne. Der Betreiber übernimmt keine Haftung für
                finanzielle Verluste, die durch Entscheidungen entstehen, die
                auf Basis der hier bereitgestellten Informationen getroffen
                wurden. Kryptowährungen sind volatil und können zum Totalverlust
                des eingesetzten Kapitals führen. <br />
                3. <strong>Urheberrecht</strong> Die erstellten Inhalte (Texte,
                Quizfragen, Design) unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung oder Verbreitung bedarf der schriftlichen
                Zustimmung des Erstellers. <br />
                4. <strong>Nutzerkommentare (Feedback-Sektion)</strong> Wir
                behalten uns das Recht vor, Kommentare im Feedback-Bereich zu
                löschen, die beleidigend, rassistisch oder werblich sind.
              </div>
            </AccordionItem>

            <AccordionItem id="item-3" title="Privacy Policy">
              <div className={styles.accordionContent}>
                1. Datenschutz auf einen Blick Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend der
                gesetzlichen Vorschriften (DSGVO). <br />
                2. Hosting (Vercel) Diese Website wird bei Vercel Inc. gehostet.
                Vercel verarbeitet technische Daten (IP-Adresse, Browser,
                Zeitpunkt), um die Seite auszuliefern. Dies geschieht auf
                Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
                an einer sicheren Bereitstellung der Website). <br />
                3. Datenerfassung auf unserer Website Feedback-Formular: Wenn
                Sie uns über das Feedback-Feld einen Kommentar hinterlassen,
                speichern wir Ihren angegebenen Namen, den Inhalt, Ihre
                Bewertung (Sterne) und den Zeitpunkt. Dies dient dazu, die
                Feedback-Funktion auf der Webseite darzustellen.
                Quiz-Fortschritt: Der Status, ob das Quiz abgeschlossen wurde,
                wird lokal in Ihrem Browser gespeichert (Local Storage).
                Cookies: Wir verwenden technisch notwendige Cookies, um die
                Funktionalität der Seite zu gewährleisten. <br />
                4. Ihre Rechte Sie haben jederzeit das Recht auf unentgeltliche
                Auskunft über Ihre gespeicherten personenbezogenen Daten sowie
                ein Recht auf Berichtigung oder Löschung dieser Daten.
                Kontaktieren Sie uns dazu unter der im Impressum angegebenen
                E-Mail-Adresse.
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </footer>
  );
}
