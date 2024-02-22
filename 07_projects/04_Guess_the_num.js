
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber)

const userInput = document.querySelector('#guessField')
const submitBtn = document.querySelector('#subt')
const previousGuesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');


let playGame = true;
let attempts = 0
const p = document.createElement('p');

if (playGame) {
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    isValidGuess(guess);
  });
}

function isValidGuess(guess) {
  if(isNaN(guess)){
    displayMsg("Please enter valid number")
  } else if(guess < 1){
    displayMsg("Please enter number greater than 0")
  }  else if(guess > 100){
    displayMsg("Please enter number smaller than 101")
  } else {
    cleanUp(guess);
    if (attempts === 10) {
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      isRightGuess(guess);
    }
  }
}

function isRightGuess(guess) {
  if(guess < randomNumber) {
    displayMessage("Enter a higher number")
  } else if (guess > randomNumber) {
    displayMessage("Enter a smaller number")
  } else {
    displayMessage("You Won!!")
    endGame()
  }
}

function cleanUp(guess) {
  userInput.value = '';
  previousGuesses.innerHTML += `${guess}, `;
  attempts++;
  remaining.innerHTML = 10 - attempts;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  previousGuesses.innerHTML = '-'
  p.classList.add('button'); // => Yeh kyha h
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  resultParas.appendChild(p); // => Yeh kyha h
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    attempts = 0;
    previousGuesses.innerHTML = '';
    remaining.innerHTML = 10;
    userInput.removeAttribute('disabled');
    resultParas.removeChild(p);

    playGame = true;
  });
}