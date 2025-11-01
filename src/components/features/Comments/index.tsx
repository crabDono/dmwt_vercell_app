"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Comments.module.css";
import FormattedDate from "../../UI/FormattedDate";

// Annahme: Dein Comment-Typ ist hier oder global definiert
interface Comment {
  id: number;
  name: string;
  content: string;
  createdAt: Date;
}

// Füge einen Standardwert hinzu: = []
export default function CommentField({
  initialComments = [],
}: {
  initialComments: Comment[];
}) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter(); // 2. Router initialisieren

  // Der useEffect zum Laden der Daten wird nicht mehr benötigt,
  // da die Daten jetzt vom Server kommen und durch router.refresh() aktualisiert werden.

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content) {
      alert("Bitte fülle beide Felder aus.");
      return;
    }

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, content }),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Senden des Kommentars.");
      }

      // Formular zurücksetzen
      setName("");
      setContent("");

      // 3. Seite neu laden, um den neuen Kommentar anzuzeigen.
      // Dies ist der Ersatz für fetchComments().
      router.refresh();
    } catch (error) {
      console.error("Submit-Fehler:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kommentar Sektion</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Dein Name"
          />
        </label>
        <label className={styles.label}>
          Kommentar
          <textarea
            className={styles.textarea}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Deinen Kommentar hier schreiben"
            rows={4}
          />
        </label>
        <div className={styles.actions}>
          <button className={styles.button} type="submit">
            Kommentar hinzufügen
          </button>
        </div>
      </form>
      <hr className={styles.sep} />
      <h2 className={styles.subtitle}>Kommentare</h2>
      <div className={styles.commentList}>
        {/* Dies wird jetzt nicht mehr abstürzen, auch wenn initialComments undefined ist */}
        {initialComments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <strong>{comment.name}</strong>
            <p>{comment.content}</p>

            {/* ERSETZE DIESE ZEILE: */}
            {/* <small>{new Date(comment.createdAt).toLocaleString()}</small> */}

            {/* MIT DIESER ZEILE: */}
            <FormattedDate date={comment.createdAt} />
          </div>
        ))}
      </div>
    </div>
  );
}
