const startGameBtn = document.getElementById('start-game-btn'); 
const ROCK = 'ROCK';
const PAPER = 'PAPER';

const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

// const start = function(){
//     console.log("hi")
// }

// const person =  {
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// }

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;


const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if ( selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! Default ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
      return ROCK;
    } else if (randomValue < 0.67) {
      return PAPER;
    } else {
      return SCISSORS;
    }
};
  
  const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
    cChoice === pChoice? RESULT_DRAW : (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) || (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS: RESULT_COMPUTER_WINS;
  
    // if (cChoice === pChoice) {
    //   return RESULT_DRAW;
    // } else if ((cChoice === ROCK && pChoice === PAPER) || (cChoice === PAPER && pChoice === SCISSORS) || (cChoice === SCISSORS && pChoice === ROCK)) {
    //   return RESULT_PLAYER_WINS;
    // } else {
    //   return RESULT_COMPUTER_WINS;
    // }
  
  startGameBtn.addEventListener('click', () => {
    
    if (gameIsRunning) { return;
    }

    gameIsRunning = true;
    console.log('Game starting here');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message = `You picked ${playerChoice}, computer picked ${computerChoice}, you  `;
    if (winner === RESULT_DRAW) {
      message = message + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
      message = message + 'won.';
    } else {
      message = message + 'lost.';
    }
    alert(message);
    gameIsRunning = false;
    
  });

// startGameBtn.addEventListener('click', function() {
//   console.log('Game starting here');
//   const playerSelection = getPlayerChoice();
//   console.log(playerSelection);
// });


// unused code practice only

const sumUp = (b,c,...a) =>{
let sum =0;
const validateNumber = (number) =>{
    return isNaN(number);
}
for (const num of a){
    sum += validateNumber(num);
    console.log(sum);
}
}

sumUp(1,5,10,3,6);