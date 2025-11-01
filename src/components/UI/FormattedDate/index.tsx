"use client";

import { useState, useEffect } from "react";

export default function FormattedDate({ date }: { date: Date | string }) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Dieser Code läuft nur im Browser, NACHDEM die Seite geladen wurde.
    // Das verhindert den Hydration-Fehler.
    setFormattedDate(new Date(date).toLocaleString());
  }, [date]);

  // Zeigt initial nichts an (oder einen Lade-Spinner), um den Mismatch zu vermeiden
  if (!formattedDate) {
    return null;
  }

  return <small>{formattedDate}</small>;
}
