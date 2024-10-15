'use strict';
//secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //if no guess when clicked
  if (!guess) {
    displayMessage('You need to input a guess');

    //when  player wins
  } else if (guess === secretNumber) {
    displayMessage('correct answer!');
    if (score > Number(document.querySelector('.highscore').textContent)) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
      //change style of background to green.
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high' : 'too low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game.');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//restart game when click again.
document.querySelector('.again').addEventListener('click', function () {
  //set the background to black and width to normal.
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  //change the secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  //set the shown secret number to ?
  document.querySelector('.number').textContent = '?';
  //set the input to blank default.
  document.querySelector('.guess').value = '';
  //set the message to start game.
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  score = 20;
});
