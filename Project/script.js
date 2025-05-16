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
  
