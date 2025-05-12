// creating a blackjack game
// creating a random card
let firscards = randomCard();
let secondcard = randomCard();
// creating array of cards
let cards = [firscards, secondcard];
// creating a sum of cards
let sum = firscards + secondcard;

let hasBlackjack = false;
let isAlive = false;
let message = "";

// creating a player object
let player = {
  name: "Per",
  chips: 145,
};

// creating a message element
let messageEl = document.querySelector("#message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");
// main button
const startButton = document.getElementById("start-button");
// add card button
const addCardButton = document.getElementById("new-card");

const per = document.getElementById("per-el");

per.textContent = player.name + ": $" + player.chips;
// function to start the game
function startgame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += " " + cards[i];
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "Blackjack!";
    hasBlackjack = true;
    isAlive = false;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
// function to start the game
function addCard() {
  if (isAlive === true && hasBlackjack === false) {
  let newCard = randomCard();
  sum += newCard;
  cards.push(newCard);
  cardsEl.textContent = "Cards: " + cards.join(" ");
  startgame();
  }

}
// creating a random card
// function to generate a random card
function randomCard() {
  
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
      return 10;
    } else if (randomNumber === 1) {
      return 11;
    } else {
      return randomNumber;
    }
  
}

console.log(firscards);

startButton.addEventListener("click", startgame); // start game button
addCardButton.addEventListener("click", addCard); // start game button
