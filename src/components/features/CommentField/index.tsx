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

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 4;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, content }),
    });

    setName("");
    setContent("");
    router.refresh();
  };

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment,
  );
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formCard}>
        <h3 className={styles.formTitle}>Hinterlasse Feedback</h3>

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
            </div>

            <p className={styles.commentText}>{comment.content}</p>
          </div>
        ))}
      </div>

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
