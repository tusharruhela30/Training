const attackValue = 10;
const mode_attack= "ATTACK"
const mode_strong_attack = "STRONG_ATTACK"
const enteredvalue  = prompt("Max default Life is 100");


let chosenMaxLife;
 try {
    chosenMaxLife = getMaxLifeValues();
  } catch (error) {
    console.log(error);
    chosenMaxLife = 100;
    alert('something wrong');
  } 
  // finally {
    
  // }

function getMaxLifeValues() {
    const enteredValue = prompt('Default', '100');
    const parsedValue = parseInt(enteredValue);
    if (isNaN(parsedValue) || parsedValue <= 0) {
      throw { message: 'Invalid input data not a number!' };
    }
    return parsedValue;
  }

const monsterAttackValue = 14;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
const healValue =20;
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';
adjustHealthBars(chosenMaxLife);
let hasBonusLife = true;

let battleLog = [];

function writeToLog(ev, val, monsterHealth, playerHealth) {

    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
      };
      switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:
          logEntry.target = 'MONSTER';
          break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
          logEntry = {
            event: ev,
            value: val,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
          };
          break;
        case LOG_EVENT_MONSTER_ATTACK:
          logEntry = {
            event: ev,
            value: val,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
          };
          break;
        case LOG_EVENT_PLAYER_HEAL:
          logEntry = {
            event: ev,
            value: val,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
          };
          break;
        case LOG_EVENT_GAME_OVER:
          logEntry = {
            event: ev,
            value: val,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
          };
          break;
        default:
          logEntry = {};
      }

// If else old one 

    // let logEntry = {
    //   event: ev,
    //   value: val,
    //   finalMonsterHealth: monsterHealth,
    //   finalPlayerHealth: playerHealth
    // };
    // if (ev === LOG_EVENT_PLAYER_ATTACK) {
    //   logEntry.target = 'MONSTER';
    // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    //   logEntry = {
    //     event: ev,
    //     value: val,
    //     target: 'MONSTER',
    //     finalMonsterHealth: monsterHealth,
    //     finalPlayerHealth: playerHealth
    //   };
    // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
    //   logEntry = {
    //     event: ev,
    //     value: val,
    //     target: 'PLAYER',
    //     finalMonsterHealth: monsterHealth,
    //     finalPlayerHealth: playerHealth
    //   };
    // } else if (ev === LOG_EVENT_PLAYER_HEAL) {
    //   logEntry = {
    //     event: ev,
    //     value: val,
    //     target: 'PLAYER',
    //     finalMonsterHealth: monsterHealth,
    //     finalPlayerHealth: playerHealth
    //   };
    // } else if (ev === LOG_EVENT_GAME_OVER) {
    //   logEntry = {
    //     event: ev,
    //     value: val,
    //     finalMonsterHealth: monsterHealth,
    //     finalPlayerHealth: playerHealth
    //   };
    // }

    battleLog.push(logEntry);
  }

function reset(){
    currentPlayerHealth = chosenMaxLife;
    currentMonsterHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound(){
    const playerDamage = dealPlayerDamage(monsterAttackValue);
    const playerHealth = playerHealthBar.value;
    const monsterHealth = monsterHealthBar.value;
    writeToLog( LOG_EVENT_MONSTER_ATTACK, playerDamage,currentMonsterHealth,currentPlayerHealth);
    if(playerHealth <=0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = playerHealth;
        setPlayerHealth(chosenMaxLife);
        alert("You would be dead but the bonus life saved you!");
    }
    if (playerHealth <= 0 && monsterHealth <= 0) {
        alert("You have a draw!");
        reset();
        writeToLog(  LOG_EVENT_GAME_OVER,
            'DRAW', currentMonsterHealth, currentPlayerHealth
          );
    } else if (playerHealth <= 0) {
        alert("You lost!");
        reset();
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'MONSTER WON',
            currentMonsterHealth,
            currentPlayerHealth
          );
    } else if (monsterHealth <= 0) {
        alert("You won!");
        reset();
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'PLAYER WON',
            currentMonsterHealth,
            currentPlayerHealth
          );
    }
}

function attackMonster(mode){
    let maxDamage;
    if( mode == mode_attack){
        maxDamage = attackValue;
    } else if (mode == mode_strong_attack){
        maxDamage = 2*attackValue;
    }
    const damage = dealMonsterDamage(maxDamage);
    endRound();
}

function attackHandler() {
   attackMonster(mode_attack)
}

function strongAttackHandler() {
    attackMonster(mode_strong_attack)
}
function healPlayerHandler(){
    let healData;
    if(currentPlayerHealth >= chosenMaxLife - healValue){
        alert("You can't heal to more than your max initial health.");
        healData = chosenMaxLife - currentPlayerHealth;
    } else{
        healData = healValue;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth +=healValue;
    endRound();
}

let lastLoggedEntry;

function printLogHandler(){

    let j =0;

    let i = 0;
  for (const logEntry of battleLog) {
    if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
      console.log(`${i}`);
      for (const key in logEntry) {
        console.log(`${key} : ${logEntry[key]}`);
      }
      lastLoggedEntry = i;
      break;
    }
    i++;
  }

    do{
        console.log("!");
        j++;
    } while(j <7);
    console.log(battleLog);
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click",strongAttackHandler);
healBtn.addEventListener("click",healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);


