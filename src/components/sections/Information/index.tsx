import InformationCard from "../../features/InformationCard";
import InputField from "../../features/Comments";
import TextComponent from "../../features/TextComponent";
import CombinedTextInformationComponent from "../../UI/CombinedTextInfo";
import CommentField from "@/src/components/features/Comments";
import prisma from "@/src/lib/prisma";
import styles from "./Information.module.css";
import InformationClient from "../../UI/InformationClient";

// Diese Funktion läuft auf dem Server, um die Daten für diese Sektion zu holen
async function getComments() {
  try {
    const comments = await prisma.comment.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return comments;
  } catch (error) {
    console.error("Fehler beim Laden der Kommentare auf dem Server:", error);
    return []; // Gib bei einem Fehler ein leeres Array zurück
  }
}

// Dies ist jetzt eine reine Server-Komponente. Sie importiert KEINE Client-Komponenten mehr direkt.
const Information = async () => {
  const comments = await getComments();

  return (
    <section className={styles.informationSection}>
      {/* Sie rendert die Client-Komponente und übergibt die Daten */}
      <InformationClient comments={comments} />
    </section>
  );
};

export default Information;
