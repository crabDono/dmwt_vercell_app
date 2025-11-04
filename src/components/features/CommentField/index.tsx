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
  const commentsPerPage = 6;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
    indexOfLastComment
  );
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3 className={styles.formTitle}>Hinterlassen Sie einen Kommentar</h3>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            placeholder="Ihr Name"
          />
        </div>
        <div className={styles.textareaGroup}>
          <label htmlFor="content" className={styles.label}>
            Kommentar
          </label>
          <textarea
            id="content"
            name="content"
            rows={4}
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.textarea}
            placeholder="Was denken Sie?"
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Senden
        </button>
      </form>

      <div className={styles.commentList}>
        {currentComments.map((comment) => (
          <div key={comment.id} className={styles.commentItem}>
            <div className={styles.avatarContainer}>
              <div className={styles.avatar}>
                {comment.name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className={styles.commentContent}>
              <div className={styles.commentHeader}>
                <p className={styles.commentName}>{comment.name}</p>
                <p className={styles.commentDate}>
                  {new Date(comment.createdAt).toLocaleDateString("de-DE", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>
              <p className={styles.commentText}>{comment.content}</p>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.paginationButton}
          >
            Zurück
          </button>
          <span className={styles.paginationInfo}>
            Seite {currentPage} von {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
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
