import styles from "./impressum.module.css";
import Link from "next/link";

export default function ImpressumPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Zurück zur Startseite
        </Link>

        <h1 className={styles.title}>Impressum: Disclaimer, Datenschutz & Urheberrecht</h1>

        <section className={styles.section}>
          <h2>Studentisches Lehrprojekt</h2>
          <p>
            Diese Website ist ein Lehrprojekt, das im Rahmen des Moduls "Digital Media & Webtechnologien" 
            im Studiengang Medien- und Kommunikationsinformatik (B.Sc.) an der Hochschule Reutlingen erstellt wurde.
          </p>
          <ul>
            <li>Erstellt von: Gruppe 07</li>
            <li>Semester: Wintersemester 2025/26</li>
            <li>Hochschule: Hochschule Reutlingen, Fakultät Informatik</li>
            <li>Projektabgabe: Januar 2026</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Disclaimer / Haftungsausschluss</h2>
          
          <h3>Zweck des Projekts</h3>
          <p>
            Diese Website wurde ausschließlich zu Lehr- und Lernzwecken erstellt, um technische und 
            gestalterische Kompetenzen im Bereich der Webentwicklung zu erwerben und zu demonstrieren. 
            Die dargestellten Produkte, Dienstleistungen und Inhalte sind fiktiv oder nicht fachlich 
            geprüft und dienen allein der Veranschaulichung technischer Umsetzungsmöglichkeiten.
          </p>

          <h3>Haftungsausschluss</h3>
          <ul>
            <li>
              <strong>Keine echten Dienstleistungen:</strong> Die auf dieser Website beworbenen oder 
              dargestellten Produkte und Dienstleistungen werden nicht real angeboten. Es können keine 
              Bestellungen, Käufe oder Buchungen getätigt werden.
            </li>
            <li>
              <strong>Keine Gewähr für Inhalte:</strong> Die präsentierten Informationen (z.B. zu Gesundheit, 
              Ernährung, Finanzen oder anderen Fachthemen) wurden nicht fachlich geprüft und dienen 
              ausschließlich zu Demonstrationszwecken. Sie stellen keine fachliche Beratung dar und dürfen 
              nicht als solche verwendet werden.
            </li>
            <li>
              <strong>Keine Haftung für Funktionalitäten:</strong> Eventuelle Registrierungs-, Kommentar- 
              oder Kontaktfunktionen dienen ausschließlich der Demonstration technischer Funktionalitäten. 
              Die Hochschule Reutlingen und die Studierenden übernehmen keine Haftung für die 
              Funktionsfähigkeit oder Sicherheit dieser Features.
            </li>
            <li>
              <strong>Externe Links:</strong> Für Inhalte externer Websites, auf die verlinkt wird, 
              übernehmen weder die Studierenden noch die Hochschule Reutlingen eine Haftung.
            </li>
            <li>
              <strong>Eigenverantwortung:</strong> Die Nutzung dieser Website erfolgt auf eigene 
              Verantwortung. Weder die Studierenden noch die Hochschule Reutlingen übernehmen Haftung 
              für Schäden jeglicher Art, die aus der Nutzung dieser Website oder der darin enthaltenen 
              Informationen entstehen.
            </li>
          </ul>

          <h3>Verantwortlichkeit</h3>
          <p>
            Für die Inhalte dieser Website sind die Studierenden im Rahmen ihres Lehrprojekts verantwortlich. 
            Die Hochschule Reutlingen übernimmt keine Haftung für die Richtigkeit, Vollständigkeit oder 
            Aktualität der dargestellten Informationen.
          </p>
          <p>
            <strong>Kontakt bei Fragen:</strong><br />
            Fakultät Informatik<br />
            Hochschule Reutlingen<br />
            Alteburgstraße 150<br />
            72762 Reutlingen<br />
            anja.hartmann@reutlingen-university.de
          </p>
        </section>

        <section className={styles.section}>
          <h2>Datenschutzerklärung</h2>
          
          <h3>Verantwortlicher</h3>
          <p>Dieses Projekt wurde im Rahmen der Lehre an der Hochschule Reutlingen erstellt.</p>
          <p>
            Hochschule Reutlingen<br />
            Alteburgstraße 150<br />
            72762 Reutlingen<br />
            Deutschland
          </p>
          <p>
            Datenschutzbeauftragter der Hochschule Reutlingen:<br />
            maximilian.musch@reutlingen-university.de
          </p>
          <p>Studentisches Projekt erstellt von: Gruppe 07</p>

          <h3>Status des Projekts</h3>
          <p>
            <strong>Wichtiger Hinweis:</strong> Dieses Projekt wurde am Januar 2025 abgeschlossen. 
            Seit diesem Zeitpunkt werden keine neuen personenbezogenen Daten mehr erfasst. Alle Funktionen 
            zur Datenerfassung (Registrierung, Kommentare, Kontaktformulare) wurden deaktiviert.
          </p>
          <p>
            Die Website dient ausschließlich als Showcase-Projekt zur Demonstration der erworbenen 
            technischen Fähigkeiten und ist Teil des studentischen Portfolios.
          </p>

          <h3>1. Welche Daten wurden erfasst? (während der aktiven Projektphase)</h3>
          <p>
            Während der aktiven Entwicklungs- und Testphase des Projekts konnten folgende personenbezogene 
            Daten erfasst worden sein:
          </p>
          <ul>
            <li>Bei Registrierung: Benutzername, E-Mail-Adresse, Passwort (verschlüsselt)</li>
            <li>Bei Kommentaren: Name, E-Mail-Adresse (optional), Kommentartext</li>
            <li>Bei Kontaktformularen: Name, E-Mail-Adresse, Nachrichtentext</li>
            <li>Technische Daten: IP-Adresse, Browser-Typ, Betriebssystem (automatisch durch Server-Logs erfasst)</li>
          </ul>
          <p><strong>Aktueller Status:</strong> Diese Funktionen sind nun deaktiviert. Es werden keine neuen Daten mehr erfasst.</p>

          <h3>2. Zweck der Datenverarbeitung</h3>
          <p>Die Datenverarbeitung erfolgte ausschließlich zu didaktischen Zwecken im Rahmen eines Hochschulprojekts zur:</p>
          <ul>
            <li>Demonstration technischer Funktionalitäten (Datenbankanbindung, User-Management, Kommentarsysteme)</li>
            <li>Erlernung von Webentwicklungs-Best-Practices</li>
            <li>Bewertung der technischen Umsetzung durch Lehrende</li>
          </ul>
          <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Lehre und Ausbildung)</p>

          <h3>3. Speicherdauer und Löschung</h3>
          <p><strong>Während der aktiven Projektphase erfasste Daten:</strong></p>
          <ul>
            <li>Die im Rahmen der Entwicklungs- und Testphase erfassten Daten werden nicht mehr aktiv genutzt</li>
            <li>Bestehende Test- und Beispieldaten verbleiben in der Datenbank als Teil des Portfolio-Projekts</li>
            <li>Betroffene Personen können jederzeit die Löschung ihrer Daten verlangen (siehe Rechte weiter unten)</li>
          </ul>
          <p><strong>Neue Daten (seit Deaktivierung):</strong></p>
          <ul>
            <li>Es werden keine neuen personenbezogenen Daten mehr erfasst</li>
          </ul>
          <p><strong>Server-Logs:</strong></p>
          <ul>
            <li>Technische Logs (IP-Adressen, Zugriffsdaten) werden vom Hosting-Provider (Vercel) gemäß dessen Datenschutzrichtlinien verarbeitet und nach 30-90 Tagen automatisch gelöscht</li>
          </ul>

          <h3>4. Weitergabe an Dritte</h3>
          <p>Personenbezogene Daten werden nicht an Dritte weitergegeben.</p>
          <p><strong>Ausnahme - Technische Dienstleister:</strong></p>
          <ul>
            <li>Hosting: Die Website wird auf Vercel gehostet. Vercel verarbeitet Daten im Rahmen einer Auftragsverarbeitung. Datenschutzerklärung von Vercel: https://vercel.com/legal/privacy-policy</li>
            <li>Datenbank: Prisma/PostgreSQL verarbeitet Daten als technischer Dienstleister</li>
          </ul>
          <p>Diese Dienstleister verarbeiten Daten ausschließlich nach unseren Weisungen und sind vertraglich zur Einhaltung der DSGVO verpflichtet.</p>

          <h3>5. Ihre Rechte (Art. 15-22 DSGVO)</h3>
          <p>Sie haben jederzeit das Recht auf:</p>
          <ul>
            <li><strong>Auskunft (Art. 15 DSGVO):</strong> Welche Ihrer Daten wurden gespeichert?</li>
            <li><strong>Berichtigung (Art. 16 DSGVO):</strong> Korrektur falscher Daten</li>
            <li><strong>Löschung (Art. 17 DSGVO):</strong> Löschung Ihrer Daten ("Recht auf Vergessenwerden")</li>
            <li><strong>Einschränkung (Art. 18 DSGVO):</strong> Einschränkung der Verarbeitung</li>
            <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Erhalt Ihrer Daten in maschinenlesbarem Format</li>
            <li><strong>Widerspruch (Art. 21 DSGVO):</strong> Widerspruch gegen die Verarbeitung</li>
          </ul>
          <p><strong>So machen Sie Ihre Rechte geltend:</strong></p>
          <p>
            Senden Sie eine E-Mail an: anja.hartmann@reutlingen-university.de<br />
            oder schreiben Sie an:<br />
            Fakultät Informatik, Hochschule Reutlingen, Alteburgstraße 150, 72762 Reutlingen
          </p>
          <p>Wir werden Ihre Anfrage innerhalb von 30 Tagen bearbeiten.</p>

          <h3>6. Beschwerderecht</h3>
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie 
            der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt.
          </p>
          <p><strong>Zuständige Aufsichtsbehörde:</strong></p>
          <p>
            Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
            Königstraße 10a<br />
            70173 Stuttgart<br />
            Telefon: 0711/615541-0<br />
            E-Mail: poststelle@lfdi.bwl.de<br />
            Website: www.baden-wuerttemberg.datenschutz.de
          </p>

          <h3>7. Cookies und Tracking</h3>
          <p>
            <strong>Cookies:</strong> Diese Website verwendet nur technisch notwendige Cookies für die 
            Session-Verwaltung. Es erfolgt keine Nachverfolgung Ihres Nutzerverhaltens zu Werbezwecken.
          </p>
          <p>
            <strong>Kein Tracking:</strong> Es werden keine Tracking-Tools wie Google Analytics, Facebook 
            Pixel oder ähnliche Dienste eingesetzt.
          </p>

          <h3>8. Sicherheit</h3>
          <p>Während der aktiven Projektphase wurden folgende Sicherheitsmaßnahmen implementiert:</p>
          <ul>
            <li>Verschlüsselte Übertragung via HTTPS</li>
            <li>Passwörter werden gehasht gespeichert (nicht im Klartext)</li>
            <li>Schutz vor SQL-Injection durch Prepared Statements</li>
            <li>Input-Validierung zum Schutz vor Cross-Site-Scripting (XSS)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Urheberrecht</h2>
          <p>
            Die Inhalte, Texte, Bilder und Grafiken dieser Website wurden im Rahmen des Lehrprojekts 
            erstellt oder stammen aus lizenzfreien Quellen bzw. wurden mit entsprechenden Nutzungsrechten verwendet.
          </p>
          <p><strong>Verwendete Ressourcen:</strong></p>
          <ul>
            <li>Bilder: Google Gemini, eigene Erstellung</li>
            <li>Icons: Lucide Icons, eigene SVGs</li>
            <li>Schriftarten: Google Fonts (Inter)</li>
          </ul>
          <p>
            Eine Weiterverwendung oder Vervielfältigung der Inhalte außerhalb dieser Website bedarf 
            der ausdrücklichen Zustimmung.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Kontakt</h2>
          <p>
            Bei Fragen zu diesem Projekt, zur Datenschutzerklärung oder zur Ausübung Ihrer Rechte 
            wenden Sie sich bitte an:
          </p>
          <p>
            <strong>E-Mail:</strong> anja.hartmann@reutlingen-university.de
          </p>
          <p>
            <strong>Postanschrift:</strong><br />
            Hochschule Reutlingen, Fakultät Informatik<br />
            Alteburgstraße 150<br />
            72762 Reutlingen
          </p>
          <p>
            <strong>Stand:</strong> Januar 2026<br />
            <strong>Letzte Aktualisierung:</strong> Januar 2026
          </p>
        </section>
      </div>
    </div>
  );
}