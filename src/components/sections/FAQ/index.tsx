import { FAQAccordionItem, FAQAccordion } from "../../features/FAQAccordion";
import styles from "./FAQ.module.css";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Was ist Kryptowährung?",
    answer:
      "Kryptowährung ist digitales Geld, das auf Blockchain-Technologie basiert. Es ermöglicht sichere und dezentrale Transaktionen ohne Banken.",
  },
  {
    id: "faq-2",
    question: "Wie sicher ist Bitcoin?",
    answer:
      "Bitcoin wird durch komplexe mathematische Algorithmen und das Proof-of-Work-System gesichert. Seine Blockchain ist seit 2009 nicht gehackt worden.",
  },
  {
    id: "faq-3",
    question: "Was ist eine Blockchain?",
    answer:
      "Eine Blockchain ist eine dezentrale Datenbank, in der Transaktionen in Blöcken gespeichert werden.  Jeder Block ist mit dem vorherigen verknüpft und kryptografisch geschützt.",
  },
  {
    id: "faq-4",
    question: "Kann ich mit Kryptos Geld verdienen?",
    answer:
      "Ja, es gibt mehrere Wege: Trading, Staking, Mining oder langfristige Investitionen.  Allerdings sind diese mit Risiken verbunden.",
  },
  {
    id: "faq-5",
    question: "Sind Kryptowährungen legal? ",
    answer:
      "In den meisten Ländern sind Kryptowährungen legal, aber die Regulierung unterscheidet sich je nach Land. Informiere dich über die Gesetze in deinem Land.",
  },
  {
    id: "faq-6",
    question: "Wie bewahre ich meine Kryptos sicher auf? ",
    answer:
      "Die sicherste Methode ist die Verwendung einer Hardware Wallet.  Online Wallets sind praktischer, aber weniger sicher.  Nutze immer starke Passwörter.",
  },
];

export default function FAQ() {
  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <span className={styles.label}>FAQS</span>
        <h2 className={styles.title}>Antworten auf häufig gestellte Fragen</h2>

        <div className={styles.accordionContainer}>
          <FAQAccordion multiple={false} className={styles.accordion}>
            {faqData.map((item) => (
              <FAQAccordionItem
                key={item.id}
                id={item.id}
                title={item.question}
              >
                <div className={styles.accordionContent}>{item.answer}</div>
              </FAQAccordionItem>
            ))}
          </FAQAccordion>
        </div>
      </div>
    </section>
  );
}
