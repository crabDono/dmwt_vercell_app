"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./Zeitreise.module.css";

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  phase: string;
  mountain: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 2008,
    title: "Whitepaper",
    description: "Satoshi Nakamoto veröffentlicht das Bitcoin Whitepaper",
    phase: "Die Startphase",
    mountain: "/mountains/mountain_2008.png",
  },
  {
    year: 2009,
    title: "Genesis Block",
    description: "Die Idee Bitcoin ist geboren",
    phase: "Die Startphase",
    mountain: "/mountains/mountain_2009.png",
  },
  {
    year: 2010,
    title: "Erste Transaktion",
    description: "10.000 BTC für 2 Pizzas",
    phase: "Die Startphase",
    mountain: "/mountains/mountain_2010.png",
  },
  {
    year: 2011,
    title: "Parität mit USD",
    description: "Bitcoin erreicht $1",
    phase: "Der Aufstieg",
    mountain: "/mountains/mountain_2011.png",
  },
  {
    year: 2012,
    title: "Erstes Halving",
    description: "Block Reward wird halbiert",
    phase: "Der Aufstieg",
    mountain: "/mountains/mountain_2012.png",
  },
  {
    year: 2013,
    title: "Erster Boom",
    description: "Bitcoin erreicht $1.000",
    phase: "Der Aufstieg",
    mountain: "/mountains/mountain_2013.png",
  },
  {
    year: 2017,
    title: "Mainstream",
    description: "Bitcoin erreicht $20.000",
    phase: "Die Explosion",
    mountain: "/mountains/mountain_2017.png",
  },
  {
    year: 2021,
    title: "All-Time-High",
    description: "Bitcoin erreicht $69.000",
    phase: "Die Explosion",
    mountain: "/mountains/mountain_2021.png",
  },
  {
    year: 2024,
    title: "Bitcoin ETF",
    description: "SEC genehmigt Spot ETFs",
    phase: "Die Zukunft",
    mountain: "/mountains/mountain_2024.png",
  },
];

const isNewPhase = (index: number): boolean => {
  if (index === 0) return true;
  return timelineEvents[index].phase !== timelineEvents[index - 1].phase;
};

const isPhaseEnd = (index: number): boolean => {
  if (index === timelineEvents.length - 1) return false;
  return timelineEvents[index].phase !== timelineEvents[index + 1].phase;
};

export default function ZeitreiseContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const astronautRef = useRef<HTMLDivElement>(null);
  const [activeEvent, setActiveEvent] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const timeline = timelineRef.current;
    const astronaut = astronautRef.current;

    if (!container || !timeline || !astronaut) return;

    const ctx = gsap.context(() => {
      gsap.to(timeline, {
        x: () => -(timeline.scrollWidth - window.innerWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => `+=${timeline.scrollWidth - window.innerWidth + 500}`,
          onUpdate: (self) => {
            const progress = self.progress;
            const eventIndex = Math.min(
              Math.floor(progress * timelineEvents.length),
              timelineEvents.length - 1,
            );
            setActiveEvent(eventIndex);

            const startX = 0;
            const endX = window.innerWidth - 300;
            const astronautX = startX + progress * (endX - startX);
            gsap.set(astronaut, { x: astronautX });
          },
        },
      });

      gsap.to(astronaut, {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className={styles.zeitreiseSection}
      data-theme="dark"
    >
      <div className={styles.header}>
        <h1 className={styles.title}>Entstehung von Bitcoin</h1>
      </div>

      <div ref={astronautRef} className={styles.astronautContainer}>
        <div className={styles.speechBubble}>
          <p className={styles.speechText}>
            {timelineEvents[activeEvent].description}
          </p>
        </div>
        <Image
          src="/astronaut_pixel.png"
          alt="Astronaut"
          width={180}
          height={225}
          className={styles.astronaut}
          priority
        />
      </div>

      <div ref={timelineRef} className={styles.timelineContainer}>
        {timelineEvents.map((event, index) => (
          <div key={event.year} className={styles.eventWrapper}>
            {isNewPhase(index) && (
              <div className={styles.phaseLabel}>
                <span className={styles.phaseLabelText}>{event.phase}</span>
              </div>
            )}

            <div
              className={`${styles.eventColumn} ${
                activeEvent === index ? styles.eventColumnActive : ""
              }`}
            >
              <div className={styles.mountainWrapper}>
                <Image
                  src={event.mountain}
                  alt={`Berg ${event.year}`}
                  width={200}
                  height={250}
                  className={styles.mountainImage}
                />
              </div>

              <div className={styles.eventMarkerWrapper}>
                <div className={styles.eventMarker} />
                <span className={styles.eventYear}>{event.year}</span>
              </div>
            </div>

            {isPhaseEnd(index) && <div className={styles.phaseDivider} />}
          </div>
        ))}
        <div className={styles.timelineLine} />
      </div>
    </section>
  );
}
