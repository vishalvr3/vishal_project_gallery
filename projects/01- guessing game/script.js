'use strict';

/*
Here we'll refactor the code,
We do refactoring to improve the code and to eliminate the duplicate code.
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const player = prompt('Enter Players Name');

document.querySelector('.playerName').textContent = player;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // implementing highscore
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📉 Too Low';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🧨 You Lost The Game!';
      displayMessage('🧨 You Lost The Game!');
      document.querySelector('.score').textContent = 0;
    }
    // When guess is too high
  }
  // When guess is too low
});

////////////////////////////////////////
// Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
  // css
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  // restoring initial conditions
  score = 20;
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // new secret number
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
