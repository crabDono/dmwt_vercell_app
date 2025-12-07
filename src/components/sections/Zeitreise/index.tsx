"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Zeitreise.module.css";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 2009,
    title: "Bitcoin Genesis",
    description: "Satoshi Nakamoto erstellt den ersten Bitcoin Block",
  },
  {
    year: 2011,
    title: "First ATH",
    description: "Bitcoin erreicht $30 für das erste Mal",
  },
  {
    year: 2013,
    title: "Mt. Gox Crash",
    description: "Die größte Bitcoin-Börse kollabiert",
  },
  {
    year: 2015,
    title: "Ethereum Launch",
    description: "Vitalik Buterin startet die Ethereum-Blockchain",
  },
  {
    year: 2017,
    title: "ICO Boom",
    description: "Initial Coin Offerings werden populär",
  },
  {
    year: 2019,
    title: "Bitcoin Halving",
    description: "Das Mining-Angebot wird halbiert",
  },
  {
    year: 2021,
    title: "Bull Run",
    description: "Bitcoin erreicht $69. 000 All-Time-High",
  },
  {
    year: 2023,
    title: "FTX Zusammenbruch",
    description: "Kryptobörse FTX kollabiert spektakulär",
  },
  {
    year: 2024,
    title: "Bitcoin ETF Genehmigung",
    description: "SEC genehmigt Bitcoin Spot ETFs",
  },
  {
    year: 2026,
    title: "Die Zukunft",
    description: "Wo wird Bitcoin sein?  Du entscheidest! ",
  },
];

export default function Zeitreise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Erst auf Client-Seite rendern
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Dynamischer Import von GSAP (nur auf Client)
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      const container = containerRef.current;
      const timeline = timelineRef.current;
      const progress = progressRef.current;
      const events = eventsRef.current.filter(Boolean);

      if (!container || !timeline || !progress || events.length === 0) return;

      // Horizontales Scroll-Tween
      const scrollTween = gsap.to(timeline, {
        xPercent: (-100 * (events.length - 1)) / events.length,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: "+=3000",
          onUpdate: (self) => {
            // Progress Bar aktualisieren
            gsap.to(progress, {
              width: `${self.progress * 100}%`,
              duration: 0.1,
              ease: "none",
            });

            // Events aktivieren basierend auf Progress
            events.forEach((event, index) => {
              const eventProgress = index / events.length;
              if (self.progress >= eventProgress) {
                event.classList.add(styles.eventActive);
              } else {
                event.classList.remove(styles.eventActive);
              }
            });
          },
        },
      });

      // Event Cards Animation
      events.forEach((event) => {
        const card = event.querySelector("[data-card]");
        if (card) {
          gsap.from(card, {
            opacity: 0,
            y: 50,
            scrollTrigger: {
              trigger: event,
              containerAnimation: scrollTween,
              start: "left 80%",
              end: "left 50%",
              scrub: true,
            },
          });
        }
      });

      // Cleanup Funktion zurückgeben
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    };

    let cleanup: (() => void) | undefined;

    initGSAP().then((cleanupFn) => {
      cleanup = cleanupFn;
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, [isClient]);

  return (
    <section ref={containerRef} className={styles.zeitreiseSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Bitcoin Zeitreise</h2>
        <p className={styles.subtitle}>
          Eine Reise durch die Geschichte von Bitcoin und Kryptowährungen
        </p>
        <p className={styles.scrollHint}>
          Scrolle um durch die Timeline zu navigieren
        </p>
      </div>

      <div className={styles.timelineContainer}>
        {/* Horizontale Linie */}
        <div className={styles.timelineBackground}>
          <div
            ref={progressRef}
            className={styles.timelineProgress}
            style={{ width: "0%" }}
          ></div>
        </div>

        {/* Timeline Events */}
        <div className={styles.timelineContent} ref={timelineRef}>
          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className={styles.timelineEvent}
              ref={(el) => {
                if (el) eventsRef.current[index] = el;
              }}
            >
              <div className={styles.eventDot}></div>

              <div className={styles.eventCard} data-card>
                <div className={styles.eventYear}>{event.year}</div>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDescription}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
