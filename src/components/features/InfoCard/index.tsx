import React from "react";
import styles from "./InfoCard.module.css";

interface InfoCardProps {
  title: string;
  subtitle?: string;
  body?: string;
}

export default function InfoCard({ title, subtitle, body }: InfoCardProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {body && <p className={styles.body}>{body}</p>}
    </article>
  );
}
