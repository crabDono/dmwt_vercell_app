"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./SlideInText.module.css";

export default function TextParallax() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const xRight = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <div ref={containerRef} className={styles.parallaxContainer}>
      <motion.h2 style={{ x: xLeft }} className={styles.movingText}>
        WERDE TEIL
      </motion.h2>
      <motion.h2
        style={{ x: xRight }}
        className={`${styles.movingText} ${styles.outlineStyle}`}
      >
        DER COMMUNITY
      </motion.h2>
    </div>
  );
}
