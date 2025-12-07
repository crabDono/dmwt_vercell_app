"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// Achte darauf, dass der Dateiname hier stimmt (du hattest einen Tippfehler "Silde")
import styles from "./SildeInText.module.css";

export default function TextParallax2() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Bewegung: Links und Rechts
  const xLeft = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const xRight = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <div ref={containerRef} className={styles.parallaxContainer}>
      {/* Zeile 1: WORK HARD */}
      <motion.h2 style={{ x: xLeft }} className={styles.movingText}>
        TEILE DEINE
      </motion.h2>

      {/* Zeile 2: PLAY HARDER */}
      {/* Hier kombinieren wir zwei Klassen (Basis-Text + Outline) */}
      <motion.h2
        style={{ x: xRight }}
        className={`${styles.movingText} ${styles.outlineStyle}`}
      >
        MEINUNG
      </motion.h2>
    </div>
  );
}
