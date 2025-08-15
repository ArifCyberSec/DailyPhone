export default function AgbPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Geltungsbereich</h2>
        <p>
          Diese AGB gelten für alle Dienstleistungen und Produkte von DailyPhone, angeboten durch Ahmad Arif,
          insbesondere Handy-Reparaturen, Zubehörverkauf und Vor-Ort-Service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Leistungen</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Handy-Reparaturen ohne Terminvereinbarung vor Ort</li>
          <li>Verkauf von Smartphone-Zubehör</li>
          <li>Austausch von Akkus und Displays ("Orig" = Originalqualität)</li>
          <li>1 Jahr Garantie auf Akku- und Displayreparaturen</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Zahlung</h2>
        <p>
          Die Bezahlung erfolgt direkt vor Ort in bar oder per Karte. Zahlung auf Rechnung oder Ratenzahlung ist
          nicht möglich.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Garantie</h2>
        <p>
          Auf Akkus und Displays gewähren wir eine Garantie von 12 Monaten ab dem Reparaturdatum. Die Garantie
          umfasst ausschließlich technische Defekte bei sachgemäßer Nutzung und schließt äußere Einwirkungen
          (z. B. Sturz- oder Wasserschäden) aus.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Haftungsausschluss für Datenverlust</h2>
        <p>
          Vor jeder Reparatur empfehlen wir dringend ein vollständiges Backup Ihrer Daten. Wir übernehmen
          keine Haftung für Datenverluste, die im Rahmen der Reparatur auftreten können.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Haftung</h2>
        <p>
          Unsere Haftung beschränkt sich auf grobe Fahrlässigkeit und Vorsatz. Für Schäden durch Eigenverschulden
          oder unsachgemäßen Umgang übernehmen wir keine Verantwortung.
        </p>
      </section>
    </div>
  );
}