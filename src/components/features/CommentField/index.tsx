// components/features/CommentField/index.tsx
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Comment } from "@prisma/client";
import styles from "./CommentField.module.css";

interface CommentFieldProps {
  comments: Comment[];
}

export default function CommentField({ comments }: CommentFieldProps) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0); // State für die Sterne (0-5)
  const [hoverRating, setHoverRating] = useState(0); // Für Hover-Effekt

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 4; // Weniger pro Seite, da Karten größer sind

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Bitte wähle eine Bewertung aus.");
      return;
    }

    await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, content, rating }),
    });

    setName("");
    setContent("");
    setRating(0);
    router.refresh();
  };

  // Pagination Logic
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  // Helper um Sterne anzuzeigen (wiederverwendbar)
  const renderStars = (score: number, interactive = false) => {
    return (
      <div className={styles.starRow}>
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = interactive
            ? star <= (hoverRating || rating)
            : star <= score;

          return (
            <span
              key={star}
              className={`${styles.star} ${isFilled ? styles.starFilled : ""} ${
                interactive ? styles.starInteractive : ""
              }`}
              onClick={() => interactive && setRating(star)}
              onMouseEnter={() => interactive && setHoverRating(star)}
              onMouseLeave={() => interactive && setHoverRating(0)}
            >
              ★
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {/* --- FORMULAR --- */}
      <form onSubmit={handleSubmit} className={styles.formCard}>
        <h3 className={styles.formTitle}>Hinterlasse Feedback</h3>

        {/* Rating Input */}
        <div className={styles.ratingInputContainer}>
          <label className={styles.label}>Deine Bewertung</label>
          {renderStars(0, true)}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            placeholder="Dein Name"
          />
        </div>

        <div className={styles.textareaGroup}>
          <label htmlFor="content" className={styles.label}>
            Nachricht
          </label>
          <textarea
            id="content"
            rows={3}
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.textarea}
            placeholder="Was denkst du über Kryptos?"
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Feedback senden
        </button>
      </form>

      {/* --- LISTE DER FEEDBACKS --- */}
      <div className={styles.commentList}>
        {currentComments.map((comment) => (
          <div key={comment.id} className={styles.commentCard}>
            <div className={styles.cardHeader}>
              <div className={styles.avatar}>
                {comment.name.charAt(0).toUpperCase()}
              </div>
              <div className={styles.metaData}>
                <span className={styles.commentName}>{comment.name}</span>
                <span className={styles.commentDate}>
                  {new Date(comment.createdAt).toLocaleDateString("de-DE")}
                </span>
              </div>
              {/* Sterne im Kommentar anzeigen */}
              <div className={styles.displayStars}>
                {/* @ts-ignore - falls TS meckert weil Prisma Types noch nicht updated sind */}
                {renderStars(comment.rating || 5)}
              </div>
            </div>

            <p className={styles.commentText}>{comment.content}</p>
          </div>
        ))}
      </div>

      {/* --- PAGINATION --- */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className={styles.paginationButton}
          >
            Zurück
          </button>
          <span className={styles.paginationInfo}>
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className={styles.paginationButton}
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
