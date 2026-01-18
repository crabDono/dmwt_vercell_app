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
      "Kryptowährungen sind digitales Geld. Anders als Euro oder Dollar werden sie nicht von einer Zentralbank gedruckt, sondern durch ein Computernetzwerk dezentral verwaltet. Das macht sie unabhängig und global verfügbar.",
  },
  {
    id: "faq-2",
    question: "Wie sicher ist Bitcoin?",
    answer:
      "Das Bitcoin-Netzwerk selbst gilt als extrem sicher und wurde noch nie gehackt. Risiken entstehen meist beim Nutzer: Wer seine Zugangsdaten verliert oder auf Betrüger hereinfällt, verliert sein Geld. Bildung ist hier der beste Schutz.",
  },
  {
    id: "faq-3",
    question: "Was ist eine Blockchain?",
    answer:
      "Stell dir die Blockchain als ein digitales Kassenbuch vor, das jeder einsehen, aber niemand nachträglich ändern kann. Jede Transaktion wird in einem Block gespeichert und an den vorherigen angekettet – so entsteht eine unveränderbare Historie.",
  },
  {
    id: "faq-4",
    question: "Kann ich mit Kryptos Geld verdienen?",
    answer:
      "Ja, durch Kurssteigerungen beim Kaufen und Verkaufen (Trading) oder durch langfristiges Halten. Aber Achtung: Die Kurse schwanken stark. Investiere nur Geld, dessen Verlust du verschmerzen kannst.",
  },
  {
    id: "faq-5",
    question: "Wie bewahre ich meine Kryptos sicher auf? ",
    answer:
      "Auf einer 'Wallet'. Am sichersten sind Hardware-Wallets (wie ein USB-Stick). Der wichtigste Teil ist dein 'Private Key' – wer diesen Schlüssel hat, besitzt die Coins. Gib ihn niemals weiter!",
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
