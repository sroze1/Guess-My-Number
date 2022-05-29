'use strict';
console.log(document.querySelector('.message').textContent);

// Variables set outside the functions
console.log(document.querySelector('.guess').value);
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let guess;

let highscore = 0;
let score = 20;

const displayMessage = function(message) {document.querySelector('.message').textContent = message;}
const displayScore = function(score) {document.querySelector('.score').textContent = score;}


document.querySelector('.number').textContent = '?';


///////////////////////////////////////////
///////////////////////////////////////////
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    // When invalid Number
    if (!guess) {
      displayMessage('No number!');
    }

    // When correct guess
    else if (guess === randomNumber) {
      displayMessage('Correct number, you win!');
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }

    // When guess is not equal to the number.. perform ternary operator. 
    else if(guess !== randomNumber) { 
       if (score > 1) {
      score--;
      displayMessage(guess < randomNumber ? 'The hidden number is higher g' : 'The hidden number is lower g');
      displayScore(score);
    }
    }
    
    // else if (guess > randomNumber) {
    //   score--;
    //   document.querySelector('.message').textContent =
    //     'The hidden number is lower g';
    //   document.querySelector('.score').textContent = score;
    // }
    // // When guess is lower than number
    // else if (guess < randomNumber) {
    //   score--;
    //   document.querySelector('.message').textContent =
    //     'The hidden number is higher g';
    //   document.querySelector('.score').textContent = score;
    // }

    // When the score hits 0
  } else {
    displayMessage('Bounce G You lost!');
    displayScore(0);
  }
});



///////////////////////////////////////////
///////////////////////////////////////////
// When the user clicks 'Again!' button..
// Reset everything
document.querySelector('.again').addEventListener('click', function () {
  // Reset the message
  displayMessage('Start guessing...');

  // Reset the random number
  randomNumber = randomNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset the box with the number:
  document.querySelector('.number').textContent = '?';

  // Reset the width of the number:
  document.querySelector('.number').style.width = '15rem';

  // Reset the guess of the user:
  document.querySelector('.guess').value = "";

  // Reset the score
  score = 20;
  displayScore(score);

  // Reset the background color
  document.querySelector('body').style.backgroundColor = '#222';
});
