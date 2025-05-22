// Hämta delar från HTML-dokumentet
let player1 = document.querySelector('.player-1');
let player2 = document.querySelector('.player-2');

let score1 = player1.querySelector('.score');
let score2 = player2.querySelector('.score');

let current1 = player1.querySelector('.current-score');
let current2 = player2.querySelector('.current-score');

let rollButton = document.querySelectorAll('.btn')[0];
let holdButton = document.querySelectorAll('.btn')[1];
let newGameButton = document.querySelector('.new-game');

let dice = document.querySelector('.dice');

// Skapa variabler för spelets data
let totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0; // 0 = spelare 1, 1 = spelare 2
let gameRunning = true;

// Funktion för att starta om spelet
function startGame() {
  totalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gameRunning = true;

  score1.textContent = '0';
  score2.textContent = '0';
  current1.textContent = '0';
  current2.textContent = '0';

  dice.style.display = 'none';

  player1.classList.add('active-player');
  player2.classList.remove('active-player');
  player1.classList.remove('winner');
  player2.classList.remove('winner');
}

// Funktion för att byta spelare
function changePlayer() {
  // Nollställ rundpoäng
  if (activePlayer === 0) {
    current1.textContent = '0';
  } else {
    current2.textContent = '0';
  }

  currentScore = 0;

  // Växla spelare
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Byt klass för att visa vem som är aktiv
  player1.classList.toggle('active-player');
  player2.classList.toggle('active-player');
}

// När man klickar på "ROLL"
rollButton.addEventListener('click', function () {
  if (!gameRunning) return;

  let diceValue = Math.floor(Math.random() * 6) + 1;
  dice.src = `side${diceValue}.png`;
  dice.style.display = 'block';

  if (diceValue === 1) {
    // Om man slår en etta förlorar man rundpoängen
    changePlayer();
  } else {
    // Lägg till tärningsvärdet till rundpoängen
    currentScore += diceValue;

    if (activePlayer === 0) {
      current1.textContent = currentScore;
    } else {
      current2.textContent = currentScore;
    }
  }
});

// När man klickar på "HOLD"
holdButton.addEventListener('click', function () {
  if (!gameRunning) return;

  totalScores[activePlayer] += currentScore;

  if (activePlayer === 0) {
    score1.textContent = totalScores[0];
  } else {
    score2.textContent = totalScores[1];
  }

  if (totalScores[activePlayer] >= 50) {
    gameRunning = false;
    dice.style.display = 'none';

    if (activePlayer === 0) {
      player1.classList.add('winner');
    } else {
      player2.classList.add('winner');
    }
  } else {
    changePlayer();
  }
});

// När man klickar på "NEW GAME"
newGameButton.addEventListener('click', startGame);

// Starta spelet första gången
startGame();