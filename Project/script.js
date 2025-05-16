// Hämta spelarelement
const player0El = document.querySelector('.player-1');
const player1El = document.querySelector('.player-2');
const score0El = player0El.querySelector('.score');
const score1El = player1El.querySelector('.score');
const current0El = player0El.querySelector('.current-score');
const current1El = player1El.querySelector('.current-score');

// Hämta knappar och tärningsbild
const btnRoll = document.querySelector('.controls .btn:nth-child(1)');
const btnHold = document.querySelector('.controls .btn:nth-child(2)');
const btnNew = document.querySelector('.btn.new-game');
const diceEl = document.querySelector('.dice');

// Startar eller återställer spelet
function initGame() {
  scores = [0, 0];        // Totala poäng för spelarna
  currentScore = 0;       // Poäng för aktiv spelares omgång
  activePlayer = 0;       // 0 = Player 1, 1 = Player 2
  playing = true;

  // Nollställ visning
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Återställ stilar
  player0El.classList.remove('winner');
  player1El.classList.remove('winner');
  player0El.classList.add('active');
  player1El.classList.remove('active');

  // Göm tärningen
  diceEl.style.display = 'none';

  // Aktivera knappar
  btnRoll.disabled = false;
  btnHold.disabled = false;
}

// Byter spelare
function switchPlayer() {
  // Nollställ rundpoäng i UI
  if (activePlayer === 0) {
    current0El.textContent = 0;
  } else {
    current1El.textContent = 0;
  }

  currentScore = 0;

  // Växla spelare
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('active');
  player1El.classList.toggle('active');
}

// Rulla tärning
btnRoll.addEventListener('click', function () {
  if (!playing) return;

  // Slumpa tal mellan 1–6
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Visa rätt tärningsbild
  diceEl.style.display = 'block';
  diceEl.src = `side${dice}.png`; // Byt bild beroende på slaget

  // Om 1 → byt spelare
  if (dice === 1) {
    switchPlayer();
  } else {
    // Lägg till i rundpoäng
    currentScore += dice;
    if (activePlayer === 0) {
      current0El.textContent = currentScore;
    } else {
      current1El.textContent = currentScore;
    }
  }
});

// Håll poäng
btnHold.addEventListener('click', function () {
  if (!playing) return;

  // Lägg till rundpoäng till totala poäng
  scores[activePlayer] += currentScore;
  if (activePlayer === 0) {
    score0El.textContent = scores[activePlayer];
  } else {
    score1El.textContent = scores[activePlayer];
  }

  // Kontrollera vinst
  if (scores[activePlayer] >= 50) {
    playing = false;
    document.querySelector(`.player-${activePlayer + 1}`).classList.add('winner');

    // Inaktivera knappar
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else {
    switchPlayer();
  }
});

// Nytt spel
btnNew.addEventListener('click', initGame); 

// Spelets tillstånd
let scores, currentScore, activePlayer, playing;

function switchPlayer() {
    // Nollställ rundpoäng i UI
    if (activePlayer === 0) {
      current0El.textContent = 0;
    } else {
      current1El.textContent = 0;
    }
  
    currentScore = 0;
  
    // Växla spelare
    activePlayer = activePlayer === 0 ? 1 : 0;
  
    // Visuell växling av färger
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

player0El.classList.add('active-player');
player0El.classList.remove('inactive-player');
player1El.classList.add('inactive-player');
player1El.classList.remove('active-player');


// Starta spelet
initGame();
  
