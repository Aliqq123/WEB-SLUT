# 🎲 Tvåspelartärningsspel

Detta är ett webbaserat tärningsspel för två spelare, byggt med HTML, CSS och JavaScript. Spelet går ut på att samla poäng genom att kasta en tärning – den första spelaren som når **50 poäng eller mer** vinner.

## 🕹️ Spelregler

- Spelet spelas av två spelare.
- Båda spelarna börjar med **0 poäng**.
- Spelarna turas om att kasta en tärning.

### 🎲 Tärningskast
- **Slår spelaren en 1:**  
  - Alla poäng för den aktuella rundan förloras.  
  - Tiden går över till nästa spelare.

- **Slår spelaren 2–6:**  
  - Tärningssumman läggs till spelarens **löpande poäng** för rundan.  
  - Spelaren kan nu:
    - Kasta igen för att försöka samla fler poäng.
    - Välja **"Hold Score"** för att spara rundpoängen till sin totala poäng.

- Spelet fortsätter tills en spelare når **50 poäng eller mer**.

### 🏆 Vinst
- Den spelare som först når eller överskrider **50 poäng** vinner spelet.
- Spelet avslutas och vinnaren meddelas direkt i gränssnittet.

---

## 💻 Teknologi

- **HTML** – För layout och struktur av spelet.
- **CSS** – För styling och användargränssnitt.
- **JavaScript** – För all interaktivitet och spellogik.

---

## 🔧 Funktionalitet

- **Spellogik:**
  - Tärningskast och poängberäkning.
  - Turhantering mellan spelare.
  - Möjlighet att spara poäng eller ta en risk och kasta om.

- **Vinstkontroll:**
  - Automatisk kontroll efter varje "Hold" eller kast.
  - Spelet avslutas och visar vem som vann.