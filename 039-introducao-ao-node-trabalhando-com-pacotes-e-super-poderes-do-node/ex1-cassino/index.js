function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function game() {
  luckyNumber = randomNumber(2, 12);
  dice = [];
  console.log(`Seu número da sorte é: ${luckyNumber}`);
  console.log("Jogando dados...");
  interval = setInterval(addDie, 2000, dice);
}

function addDie() {
  dice.push(randomNumber(1, 6));
  if (dice.length === 2) {
    console.log(`Você tirou ${dice[1]} no segundo dado!`);
    clearInterval(interval);
    setTimeout(verifyGame, 1000, luckyNumber, dice);
  } else {
    console.log(`Você tirou ${dice[0]} no primeiro dado!`);
  }
}

function verifyGame(luckyNumber, dice) {
  if (dice[0] === dice[1] || luckyNumber === dice[0] + dice[1]) {
    console.log("Você ganhou!");
  } else {
    console.log("Você perdeu");
  }
}

let interval;
let luckyNumber;
let dice;
game();
