"use client";

import { useState } from "react";
import styles from "./Quiz.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null),
  );

  const [showResult, setShowResult] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [resultLevel, setResultLevel] = useState("");

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex + 1;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion === quizQuestions.length - 1) {
      calculateResult();
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const calculateResult = () => {
    const totalScore =
      answers.reduce((sum, current) => sum! + (current || 0), 0) || 0;

    setFinalScore(totalScore);

    if (totalScore <= 20) {
      setResultLevel("Anfänger");
    } else if (totalScore <= 38) {
      setResultLevel("Amateur");
    } else {
      setResultLevel("Profi");
    }

    localStorage.setItem("quizCompleted", "true");
    setShowResult(true);
  };

  const currentSelectedAnswer = answers[currentQuestion];
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;

  return (
    <div className={styles.quizContainer} data-theme="dark">
      <Image
        src="/astronaut_1.png"
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
            <button
              onClick={() => router.push("/zeitreise")}
              className={styles.restartButton}
            >
              Zur Zeitreise
            </button>
          </div>
        ) : (
          <>
            <div className={styles.questionSection}>
              <div className={styles.progressHeader}>
                <span className={styles.questionCountText}>
                  FRAGE {currentQuestion + 1} VON {quizQuestions.length}
                </span>
              </div>

              <h2 className={styles.questionText}>
                {quizQuestions[currentQuestion].question}
              </h2>
            </div>

            <div className={styles.answerSection}>
              {quizQuestions[currentQuestion].answers.map((answer, index) => {
                const isSelected = currentSelectedAnswer === index + 1;

                let buttonClass = styles.answerButton;
                if (isSelected) {
                  buttonClass += ` ${styles.selected}`;
                }

                return (
                  <button
                    key={index}
                    className={buttonClass}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    {answer}
                  </button>
                );
              })}
            </div>

            <div className={styles.navigationButtons}>
              <button
                className={`${styles.navButton} ${styles.navButtonBack}`}
                onClick={handleBack}
                disabled={currentQuestion === 0}
                style={{
                  visibility: currentQuestion === 0 ? "hidden" : "visible",
                }}
              >
                Zurück
              </button>

              <button
                className={`${styles.navButton} ${styles.navButtonNext}`}
                onClick={handleNext}
                disabled={currentSelectedAnswer === null}
              >
                {isLastQuestion ? "Ergebnis anzeigen" : "Weiter"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
