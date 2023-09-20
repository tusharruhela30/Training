const attackValue = 10;
let chosenMaxLife = 100;
const monsterAttackValue = 14;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
const healValue =20;
adjustHealthBars(chosenMaxLife);


function endRound(){
    const playerDamage = dealPlayerDamage(monsterAttackValue);
    const playerHealth = playerHealthBar.value;
    const monsterHealth = monsterHealthBar.value;
    if (playerHealth <= 0 && monsterHealth <= 0) {
        alert("You have a draw!");
    } else if (playerHealth <= 0) {
        alert("You lost!");
    } else if (monsterHealth <= 0) {
        alert("You won!");
    }
}

function attackMonster(mode){
    let maxDamage;
    if( mode == "ATTACK"){
        maxDamage = attackValue;
    } else if (mode == "STRONG_ATTACK"){
        maxDamage = 2*attackValue;
    }
    const damage = dealMonsterDamage(maxDamage);
    endRound();
}

function attackHandler() {
   attackMonster("ATTACK")
}

function strongAttackHandler() {
    attackMonster("STRONG_ATTACK")
}
function healPlayerHandler(){
    let  healData;
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

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click",strongAttackHandler);
healBtn.addEventListener("click",healPlayerHandler)