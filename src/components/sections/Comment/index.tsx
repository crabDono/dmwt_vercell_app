import CommentField from "../../features/CommentField";
import { prisma } from "@/lib/prisma";
import styles from "./Comment.module.css";

const CommentSection = async () => {
  const comments = await prisma.comment.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <section className={styles.information}>
      {/* Container für den Glas-Effekt */}
      <div className={styles.glassContainer}>
        <h2 className={styles.title}>Teile deine Gedanken</h2>
        <p className={styles.subtitle}>
          Wir freuen uns auf dein Feedback und deine Fragen.
        </p>
        <CommentField comments={comments} />
      </div>
    </section>
  );
};

export default CommentSection;
