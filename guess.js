"use strict";
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;
function displayMessage(msg) {
  document.querySelector(".message").textContent = msg;
}

document.querySelector(".number").textContent = "?";
document.querySelector(".check").addEventListener("click", () => {
  const guess = parseInt(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent =
      "Enter a number between 1 and 20";

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 You guessed it!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //high score function
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😞 Game over!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#990022";
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");

  //displays reset score
  document.querySelector(".score").textContent = score;

  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
