// Hämta spelarelement
const player0El = document.querySelector('.player-1'); // Referens till spelare 1:s DOM-element
const player1El = document.querySelector('.player-2'); // Referens till spelare 2:s DOM-element
const score0El = player0El.querySelector('.score'); // Totala poäng för spelare 1
const score1El = player1El.querySelector('.score'); // Totala poäng för spelare 2
const current0El = player0El.querySelector('.current-score'); // Nuvarande rundpoäng för spelare 1
const current1El = player1El.querySelector('.current-score'); // Nuvarande rundpoäng för spelare 2

// Hämta knappar och tärningsbild
const btnRoll = document.querySelector('.controls .btn:nth-child(1)'); // Rulla-tärning-knappen
const btnHold = document.querySelector('.controls .btn:nth-child(2)'); // Håll-poäng-knappen
const btnNew = document.querySelector('.btn.new-game'); // Nytt-spel-knappen
const diceEl = document.querySelector('.dice'); // Tärningsbilden i spelet

// Startar eller återställer spelet
function initGame() {
  scores = [0, 0];        // Nollställ totala poäng för båda spelarna
  currentScore = 0;       // Nollställ rundpoängen
  activePlayer = 0;       // Starta med spelare 1
  playing = true;         // Sätt spelet till aktivt läge

  // Nollställ visning av poäng
  score0El.textContent = 0; // Visar 0 som totala poäng för spelare 1
  score1El.textContent = 0; // Visar 0 som totala poäng för spelare 2
  current0El.textContent = 0; // Visar 0 som rundpoäng för spelare 1
  current1El.textContent = 0; // Visar 0 som rundpoäng för spelare 2

  // Ta bort vinnarklass från tidigare vinnare om någon
  player0El.classList.remove('winner');
  player1El.classList.remove('winner');
  
  // Gör spelare 1 aktiv och spelare 2 inaktiv
  player0El.classList.add('active');
  player1El.classList.remove('active');

  // Göm tärningsbilden
  diceEl.style.display = 'none';

  // Aktivera knapparna igen
  btnRoll.disabled = false;
  btnHold.disabled = false;
}

// Byter spelare
function switchPlayer() {
  // Nollställ rundpoängen i gränssnittet för den aktiva spelaren
  if (activePlayer === 0) {
    current0El.textContent = 0;
  } else {
    current1El.textContent = 0;
  }

  currentScore = 0; // Nollställ rundpoäng

  // Växla till andra spelaren
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Visuellt markera vilken spelare som är aktiv
  if (activePlayer === 0) {
    player0El.classList.add('active-player');
    player0El.classList.remove('inactive-player');
    player1El.classList.remove('active-player');
    player1El.classList.add('inactive-player');
  } else {
    player1El.classList.add('active-player');
    player1El.classList.remove('inactive-player');
    player0El.classList.remove('active-player');
    player0El.classList.add('inactive-player');
  }
}