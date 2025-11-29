"use client";

import { useState } from "react";
import styles from "./Quiz.module.css";
import Navbar from "@/src/components/UI/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation"; // 1. useRouter importieren

const quizQuestions = [
  {
    question:
      "Wie sicher fühlst du dich, wenn du jemandem erklären müsstest, was Bitcoin ist?",
    answers: [
      "Sehr unsicher – ich könnte kaum etwas erklären",
      "Eher unsicher",
      "Neutral – ein bisschen könnte ich erklären",
      "Sicher – ich kenne die Grundlagen gut",
      "Sehr sicher – ich könnte es ausführlich erklären",
    ],
  },
  {
    question: "Wie fühlst du dich beim Umgang mit Wallets und Private Keys?",
    answers: [
      "Überfordert",
      "Unsicher",
      "Geht so – ich schaffe es irgendwie",
      "Sicher",
      "Sehr sicher – absolut kein Problem für mich",
    ],
  },
  {
    question:
      "Wie wohl fühlst du dich dabei, Kryptowährungen selbst zu kaufen oder zu verkaufen?",
    answers: [
      "Sehr unwohl – mache ich lieber nicht",
      "Eher unwohl",
      "Neutral",
      "Wohl – ich mache das gelegentlich",
      "Sehr wohl – mache ich regelmäßig und bewusst",
    ],
  },
  {
    question:
      "Wie würdest du dein Verständnis von Blockchain-Technologie emotional beschreiben?",
    answers: [
      "Ich stehe komplett im Nebel",
      "Ich verstehe Teile davon, aber vieles ist unklar",
      "Ich verstehe die Grundlagen okay",
      "Ich verstehe, wie es funktioniert",
      "Ich verstehe es tiefgehend und könnte es anderen vermitteln",
    ],
  },
  {
    question: "Wie fühlst du dich beim Thema Sicherheit im Kryptobereich?",
    answers: [
      "Sehr unsicher – ich habe Angst, Fehler zu machen",
      "Eher vorsichtig/unsicher",
      "Ich kenne die Basics",
      "Ich kenne typische Risiken und weiß, wie man sie vermeidet",
      "Sehr sicher – ich kenne viele Sicherheitsmechanismen",
    ],
  },
  {
    question:
      "Wie vertraut fühlst du dich mit Begriffen wie DeFi, NFTs oder Smart Contracts?",
    answers: [
      "Komplett fremd",
      "Teilweise gehört, aber wenig verstanden",
      "Grundverständnis vorhanden",
      "Gut vertraut",
      "Sehr vertraut – nutze/verstehe diese Konzepte regelmäßig",
    ],
  },
  {
    question:
      "Wie sicher fühlst du dich beim Verständnis von Krypto-Kursen, Charts und Marktbewegungen?",
    answers: [
      "Sehr unsicher",
      "Unsicher",
      "Neutral – ich erkenne Grundmuster",
      "Sicher – ich kann Charts lesen",
      "Sehr sicher – ich verstehe Marktstrukturen & Analyseformen",
    ],
  },
  {
    question:
      "Wie gut fühlst du dich informiert über aktuelle Entwicklungen im Kryptomarkt?",
    answers: [
      "Überhaupt nicht informiert",
      "Kaum informiert",
      "Mittelmäßig informiert",
      "Gut informiert",
      "Sehr gut informiert – ich verfolge News und Trends",
    ],
  },
  {
    question:
      "Wie sicher fühlst du dich bei der Nutzung verschiedener Blockchains?",
    answers: [
      "Sehr unsicher",
      "Unsicher",
      "Geht so – ich kenne einzelne",
      "Sicher – ich nutze mehrere",
      "Sehr sicher – ich bewege mich problemlos auf vielen Chains",
    ],
  },
  {
    question:
      "Wie würdest du dein Gefühl beim Thema Krypto-Investitionen beschreiben?",
    answers: [
      "Sehr überfordert",
      "Eher unsicher",
      "Neutral – ich mache es vorsichtig",
      "Sicher – ich weiß, was ich tue",
      "Sehr sicher – ich habe eine klare Strategie und Erfahrung",
    ],
  },
];

export default function QuizPage() {
  const router = useRouter(); // 2. useRouter initialisieren
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [finalScore, setFinalScore] = useState(0);
  const [resultLevel, setResultLevel] = useState("");

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswerIndex !== null) return;

    setSelectedAnswerIndex(answerIndex);
    const newAnswers = [...answers, answerIndex + 1];
    setAnswers(newAnswers);

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizQuestions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        const totalScore = newAnswers.reduce(
          (sum, current) => sum + current,
          0
        );
        setFinalScore(totalScore);

        if (totalScore <= 20) {
          setResultLevel("Anfänger");
        } else if (totalScore <= 38) {
          setResultLevel("Amateur");
        } else {
          setResultLevel("Profi");
        }

        // 3. Quiz-Status im localStorage speichern
        localStorage.setItem("quizCompleted", "true");
        setShowResult(true);
      }
      setSelectedAnswerIndex(null);
    }, 500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setSelectedAnswerIndex(null);
    setFinalScore(0);
    setResultLevel("");
  };

  return (
    <div className={styles.quizContainer}>
      {/* Astronauten-Bild als Hintergrund-Element hinzugefügt */}
      <Image
        src="/astronaut_1.png" // Pfad zum Bild im public-Ordner
        alt="Ein schwebender Astronaut"
        width={750}
        height={750}
        className={styles.backgroundImage}
        priority
      />
      <div className={styles.quizBox}>
        {showResult ? (
          <div className={styles.scoreSection}>
            <h2>Dein Ergebnis</h2>
            <p className={styles.resultText}>
              Du hast eine Gesamtpunktzahl von{" "}
              <span className={styles.scoreNumber}>{finalScore}</span> erreicht.
            </p>
            <p className={styles.levelText}>
              Deine Einstufung:{" "}
              <span className={styles.levelName}>{resultLevel}</span>
            </p>
            {/* 4. Button zum Zurückkehren zur Hauptseite */}
            <button
              onClick={() => router.push("/zeitreise")}
              className={styles.restartButton}
              style={{ marginTop: "1rem" }}
            >
              Zur Zeitreise
            </button>
          </div>
        ) : (
          <>
            <div className={styles.questionSection}>
              <div className={styles.questionCount}></div>
              <h2 className={styles.questionText}>
                {quizQuestions[currentQuestion].question}
              </h2>
            </div>
            <div className={styles.answerSection}>
              {quizQuestions[currentQuestion].answers.map((answer, index) => {
                let buttonClass = styles.answerButton;
                if (selectedAnswerIndex === index) {
                  buttonClass += ` ${styles.selected}`;
                }

                return (
                  <button
                    key={index}
                    className={buttonClass}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswerIndex !== null}
                  >
                    {answer}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
