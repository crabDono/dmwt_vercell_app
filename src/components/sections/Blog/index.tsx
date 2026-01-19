"use client";

import React, { ReactNode, useState } from "react";
import styles from "./BlogSection.module.css";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  fullContent: ReactNode;
  imageUrl?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Krypto für Anfänger: So gelingt der erste Kauf",
    excerpt:
      "Fühlst du dich unsicher beim ersten Schritt? Wir zeigen dir, wie du deine ersten Coins kaufst...",
    imageUrl: "/blog_01.png",
    fullContent: (
      <>
        <p>
          Der erste Schritt in die Krypto-Welt fühlt sich oft an wie der Sprung
          ins kalte Wasser. Tausende von Coins, blinkende Charts und
          Fachbegriffe, die niemand versteht. Aber keine Sorge: Der eigentliche
          Kaufprozess ist heute kaum schwieriger als Online-Banking.
        </p>

        <br />
        <strong>1. Die richtige Börse wählen (CEX vs. DEX)</strong>
        <p>
          Für den Anfang ist eine zentrale Börse (CEX) wie Coinbase, Binance
          oder Kraken am besten geeignet. Sie funktionieren wie eine Bank: Du
          meldest dich an, verifizierst deine Identität (KYC) und kannst Geld
          per Überweisung einzahlen. Dezentrale Börsen (DEX) sind für
          Fortgeschrittene und erfordern bereits eine eigene Wallet.
        </p>

        <br />
        <strong>2. Der Unterschied zwischen "Market" und "Limit"</strong>
        <p>
          Wenn du kaufst, wirst du oft gefragt: "Market Order" oder "Limit
          Order"?
        </p>
        <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
          <li>
            <strong>Market:</strong> Du kaufst sofort zum aktuellen Preis.
            Schnell und einfach.
          </li>
          <li>
            <strong>Limit:</strong> Du setzt einen Wunschpreis (z.B. "Kaufe
            Bitcoin erst, wenn er auf 25.000€ fällt"). Das ist günstiger, aber
            es gibt keine Garantie, dass der Kauf ausgeführt wird.
          </li>
        </ul>
        <p>
          <em>Tipp für den Start:</em> Nutze Market-Orders oder die "Einfacher
          Kauf"-Funktion der Börsen.
        </p>

        <br />
        <strong>
          3. Die goldene Regel: Investiere nur, was du verlieren kannst
        </strong>
        <p>
          Krypto ist volatil. Kurse können an einem Tag um 20% fallen. Starte
          mit kleinen Beträgen (z.B. 50€), um ein Gefühl für die Schwankungen zu
          bekommen, ohne dass du nachts schlecht schläfst.
        </p>

        <br />
        <strong>4. Häufige Anfängerfehler</strong>
        <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
          <li>
            <strong>FOMO (Fear Of Missing Out):</strong> Kaufe nicht, nur weil
            ein Kurs gerade explodiert und grün ist. Das ist meistens der
            schlechteste Zeitpunkt.
          </li>
          <li>
            <strong>Scams:</strong> Niemand schenkt dir Bitcoin. Wenn dir jemand
            auf Social Media "garantierte Gewinne" verspricht, blockiere ihn
            sofort.
          </li>
        </ul>
        <p>
          Dein erster Kauf ist mehr als eine Investition – es ist deine
          Eintrittskarte in eine neue Technologie. Nimm dir Zeit!
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Wallets, Keys & Blockchains: Keine Angst vor der Technik",
    excerpt:
      "Überfordert von Begriffen wie Private Keys oder Multi-Chain? Wir erklären dir einfach und verständlich...",
    imageUrl: "/blog_02.png",
    fullContent: (
      <>
        <p>
          Wenn du Krypto auf einer Börse kaufst, gehören die Coins technisch
          gesehen nicht dir, sondern der Börse. Wenn die Börse pleitegeht,
          könnte dein Geld weg sein. Deshalb lautet das wichtigste Mantra: "Not
          your keys, not your coins."
        </p>

        <br />
        <strong>Was ist eine Wallet wirklich?</strong>
        <p>
          Stell dir eine Wallet nicht als Geldbörse vor, in der Münzen liegen.
          Stell sie dir eher als Schlüsselbund vor. Deine Coins liegen immer auf
          der Blockchain (im digitalen Kassenbuch), niemals auf deinem Handy
          oder Computer. Deine Wallet speichert nur den Schlüssel, um diese
          Coins zu bewegen.
        </p>

        <br />
        <strong>Public Key vs. Private Key</strong>
        <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
          <li>
            <strong>Public Key (Öffentliche Adresse):</strong> Das ist wie deine
            IBAN oder E-Mail-Adresse. Die kannst du jedem geben, damit er dir
            Geld schickt.
          </li>
          <li>
            <strong>Private Key (Seed Phrase):</strong> Das ist wie deine PIN
            oder dein Passwort. Wer diesen Schlüssel hat, hat vollen Zugriff auf
            dein Geld.{" "}
            <em>
              Gib diesen Schlüssel niemals an jemanden weiter und speichere ihn
              niemals digital (kein Foto, keine Cloud)!
            </em>{" "}
            Schreib ihn auf Papier und verstecke ihn gut.
          </li>
        </ul>

        <br />
        <strong>Das Ding mit den Blockchains</strong>
        <p>
          Ein häufiger Fehler: Bitcoin an eine Ethereum-Adresse schicken. Das
          funktioniert nicht und das Geld ist oft verloren.
        </p>
        <p>
          Stell dir Blockchains wie verschiedene Währungen vor. Du kannst nicht
          einfach Euro in einen Dollar-Automaten stecken. Wenn du Coins
          versendest, achte immer darauf, dass Sender-Netzwerk und
          Empfänger-Adresse identisch sind (z.B. Bitcoin-Netzwerk zu
          Bitcoin-Adresse).
        </p>

        <br />
        <strong>Fazit zur Sicherheit</strong>
        <p>
          Für kleine Beträge ist eine "Hot Wallet" (App auf dem Handy) okay.
          Sobald deine Investition einen Wert erreicht, bei dessen Verlust du
          weinen würdest, solltest du dir eine "Hardware Wallet" (wie einen
          Ledger oder BitBox) zulegen.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Märkte verstehen: Charts, DeFi und Strategien",
    excerpt:
      "Möchtest du Charts lesen lernen und Begriffe wie DeFi oder Smart Contracts wirklich verstehen?",
    imageUrl: "/blog_03.png",
    fullContent: (
      <>
        <p>
          Krypto ist mehr als nur "Kaufen und Hoffen". Wer langfristig
          erfolgreich sein will, muss verstehen, wie der Markt tickt und was
          hinter den Technologien steckt.
        </p>

        <br />
        <strong>1. Charts lesen: Keine Magie, sondern Psychologie</strong>
        <p>
          Du musst kein Mathe-Genie sein, um Charts zu verstehen. Ein Chart
          zeigt lediglich die Geschichte von Angebot und Nachfrage.
        </p>
        <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
          <li>
            <strong>Grüne Kerzen:</strong> Mehr Käufer als Verkäufer
            (Gier/Optimismus).
          </li>
          <li>
            <strong>Rote Kerzen:</strong> Mehr Verkäufer als Käufer
            (Angst/Gewinnmitnahme).
          </li>
        </ul>
        <p>
          Versuche nicht, jeden kleinen Ausbruch vorherzusagen. Achte
          stattdessen auf den großen Trend: Geht es über Wochen eher hoch oder
          runter? "The Trend is your Friend."
        </p>

        <br />
        <strong>2. Was sind DeFi und Smart Contracts?</strong>
        <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
          <li>
            <strong>Smart Contracts:</strong> Das sind digitale Verträge, die
            sich selbst ausführen. Beispiel: "Wenn Person A 5 ETH sendet, erhält
            sie automatisch das digitale Bild B". Kein Anwalt, kein Notar
            dazwischen.
          </li>
          <li>
            <strong>DeFi (Decentralized Finance):</strong> Das ist das
            Bankensystem ohne Banken, gebaut auf Smart Contracts. Du kannst
            Zinsen verdienen, Kredite aufnehmen oder tauschen – alles
            automatisiert. Das bietet riesige Chancen, aber auch Risiken
            (Programmierfehler im Code).
          </li>
        </ul>

        <br />
        <strong>3. Strategie schlägt Emotion</strong>
        <p>
          Der größte Feind des Investors ist er selbst. Wir neigen dazu, bei
          hohen Preisen gierig zu werden und bei tiefen Preisen panisch zu
          verkaufen.
        </p>
        <p>
          Die beste Strategie für Einsteiger ist{" "}
          <strong>DCA (Dollar Cost Averaging)</strong>:
        </p>
        <p>
          Du kaufst einfach jeden Monat für den gleichen Betrag (z.B. 100€),
          egal ob der Kurs hoch oder niedrig steht.
        </p>
        <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
          <li>Ist der Kurs hoch, kaufst du weniger Coins.</li>
          <li>Ist der Kurs niedrig, kaufst du mehr Coins.</li>
        </ul>
        <p>
          So erhältst du langfristig einen guten Durchschnittspreis und nimmst
          die Emotionen aus dem Spiel.
        </p>
        <p>
          Verstehe, in was du investierst, bleib ruhig und denke langfristig.
          Das ist der Schlüssel zum Erfolg.
        </p>
      </>
    ),
  },
];

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const openModal = (blog: BlogPost) => {
    setSelectedBlog(blog);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedBlog(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className={styles.section} data-theme="dark">
      {/* <div className={styles.waveTop}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 C300,0 900,120 1200,60 L1200,0 L0,0 Z"
            fill="#e8e8e8"
          />
        </svg>
      </div> */}
      <div className={styles.container}>
        {blogPosts.map((blog, index) => (
          <article
            key={blog.id}
            onClick={() => openModal(blog)}
            className={`${styles.article} ${index % 2 === 1 ? styles.articleReversed : ""}`}
          >
            <div className={styles.textContent}>
              <h2 className={styles.title}>{blog.title}</h2>
              <p className={styles.excerpt}>{blog.excerpt}</p>
            </div>

            <div className={styles.imageWrapper}>
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className={styles.cardImage}
              />
            </div>
          </article>
        ))}
      </div>

      {selectedBlog && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className={styles.closeButton}
              aria-label="Schließen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className={styles.modalBody}>
              <img
                src={selectedBlog.imageUrl}
                alt={selectedBlog.title}
                className={styles.modalDisplayImage}
              />
              <h2 className={styles.modalTitle}>{selectedBlog.title}</h2>
              <div className={styles.modalText}>{selectedBlog.fullContent}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
