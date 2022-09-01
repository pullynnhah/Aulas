import randomNumber from "./random.js";
import chalk from "chalk";

function game() {
  luckyNumber = randomNumber(2, 12);
  dice = [];
  console.log("Seu número da sorte é:" + chalk.blue(`${luckyNumber}`));
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
    console.log(chalk.green("Você ganhou!"));
  } else {
    console.log(chalk.red("Você perdeu"));
  }
}

let interval;
let luckyNumber;
let dice;
game();
