"use client";

import { useState } from "react";
import styles from "./BlogSection.module.css";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  fullContent: string;
  imageUrl?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Blog #1",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos et accusam et justo duo dolores et ea rebum.  Stet clita kasd",
    fullContent:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    id: 2,
    title: "Blog #2",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos et accusam et justo duo dolores et ea rebum.  Stet clita kasd",
    fullContent:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    id: 3,
    title: "Blog #3",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  At vero eos et accusam et justo duo dolores et ea rebum.  Stet clita kasd",
    fullContent:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
];

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const openModal = (blog: BlogPost) => {
    setSelectedBlog(blog);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedBlog(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className={styles.section} data-theme="dark">
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 C300,0 900,120 1200,60 L1200,0 L0,0 Z"
            fill="#e8e8e8"
          />
        </svg>
      </div>
      <div className={styles.container}>
        {blogPosts.map((blog, index) => (
          <article
            key={blog.id}
            onClick={() => openModal(blog)}
            className={`${styles.article} ${index % 2 === 1 ? styles.articleReversed : ""}`}
          >
            <div className={styles.textContent}>
              <h2 className={styles.title}>{blog.title}</h2>
              <p className={styles.excerpt}>{blog.excerpt}</p>
            </div>

            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder} />
            </div>
          </article>
        ))}
      </div>

      <div className={styles.waveDivider}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="#e8e8e8"
          />
        </svg>
      </div>

      {selectedBlog && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className={styles.closeButton}
              aria-label="Schließen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className={styles.modalBody}>
              <div className={styles.modalImage} />
              <h2 className={styles.modalTitle}>{selectedBlog.title}</h2>
              <p className={styles.modalText}>{selectedBlog.fullContent}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
