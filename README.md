# Finanzbildung für die Krypto-Ära

Eine moderne Webanwendung, die Nutzern grundlegendes und fortgeschrittenes Wissen über Kryptowährungen und die Blockchain-Technologie vermittelt.

## 🚀 Beschreibung

Dieses Projekt wurde im Rahmen des Moduls "Digitale Medien und Webtechnologien" im 3. Semester von Maximilian Schichov, Meik Gaab und Michael Ott entwickelt. Es ist eine interaktive Lernplattform, die darauf abzielt, die Lücke im Finanzwissen im Bereich der digitalen Währungen zu schließen. Nutzer können ihr Wissen mit einem Quiz testen, die Kursverläufe der wichtigsten Kryptowährungen in dynamischen Charts verfolgen und sich mit anderen Nutzern in einem Kommentarbereich austauschen.

## ✨ Features

- **Interaktives Quiz:** Ein Quiz zur Selbsteinschätzung, das den Wissensstand des Nutzers in die Kategorien "Anfänger", "Amateur" oder "Profi" einteilt.
- **Dynamische Kurs-Charts:** Eine Infografik-Sektion, die historische Kursdaten für wichtige Kryptowährungen (BTC, ETH, SOL, etc.) von der CoinGecko-API abruft und visualisiert.
- **Kommentarfunktion:** Ein Bereich, in dem Nutzer Kommentare und Fragen hinterlassen können.
- **Modernes UI/UX:** Ein ansprechendes und vollständig responsives Design, das auf allen Geräten funktioniert.
- **Serverseitiges Rendering (SSR):** Nutzung der Stärken von Next.js für schnelle Ladezeiten und SEO-Vorteile.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Sprache:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [CSS Modules](https://github.com/css-modules/css-modules)
- **Datenbank-ORM:** [Prisma](https://www.prisma.io/)
- **Charts:** [Chart.js](https://www.chartjs.org/)
- **Datenquelle:** [CoinGecko API](https://www.coingecko.com/en/api)
- **Deployment:** [Vercel](https://vercel.com/)

## ⚙️ Erste Schritte

Um das Projekt lokal auszuführen, befolge diese Schritte:

1.  **Repository klonen:**

    ```bash
    git clone <repository-url>
    cd finanzbildung
    ```

2.  **Abhängigkeiten installieren:**

    ```bash
    npm install
    ```

3.  **Umgebungsvariablen einrichten:**
    Erstelle eine Datei namens `.env.local` im Hauptverzeichnis und füge deine Datenbank-URL und deinen CoinGecko API-Key hinzu:

    ```
    DATABASE_URL="deine-prisma-db-url"
    COINGECKO_API_KEY="dein-coingecko-api-key"
    ```

4.  **Prisma-Client generieren:**

    ```bash
    npx prisma generate
    ```

5.  **Entwicklungsserver starten:**
    ```bash
    npm run dev
    ```
    Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

---

## ✅ To-Do Liste

Hier ist eine Liste geplanter Features und Verbesserungen für das Projekt.

### Kernfunktionalität

- [x] Rotenfaden (HOME -> QUIZ -> Zeitreise -> CTA)
- [ ] Benutzerauthentifizierung (Login/Registrierung) implementieren.
- [x] Eine "Zeitreise"-Seite mit historischen Meilensteinen der Krypto-Welt erstellen.

### Inhalt & UX

- [ ] Weitere Kryptowährungen zu den Infografiken hinzufügen.
- [x] Das Quiz um weitere Fragen und Themengebiete erweitern.
- [ ] Detaillierte Artikel oder Guides zu den wichtigsten Themen erstellen.
- [ ] Animationen und Übergänge für eine bessere User Experience hinzufügen.

### Technik

- [ ] Unit- und Integration-Tests für kritische Komponenten schreiben.
- [ ] Error-Handling und Ladezustände weiter verbessern.
- [x] Pagination für den Kommentarbereich implementieren.
