"use client";

// Diese Komponente importiert das Kommentarfeld
import CommentField from "@/src/components/features/Comments";

// KORRIGIERE DIESE ZEILE:
// import styles from "./Information.module.css";

// MIT DIESER ZEILE:
import styles from "@/src/components/sections/Information/Information.module.css";

// Definiere den Typ für einen Kommentar
interface Comment {
  id: number;
  name: string;
  content: string;
  createdAt: Date;
}

// Diese Komponente erhält die bereits geladenen Kommentare
export default function InformationClient({
  comments,
}: {
  comments: Comment[];
}) {
  return <CommentField initialComments={comments} />;
}
