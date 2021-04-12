"use strict";

// To select an element
// document.querySelector(".message").textContent  //for class use "" and . and for id use "" and //#endregion
// document.querySelector(".message").textContent = "🎉 Correct!"

// document.querySelector(".number").textContent = 777
// document.querySelector(".score").textContent = 777

// document.querySelector(".guess").value  //to get the value
// document.querySelector(".guess").value = 77  //to manipulate the value

//Event is something that happens on the page. Event listener waits for event and reacts
//First arg to event listener is the type of event. Second arg is a function with event handler functionality

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

document.querySelector(".number").textContent = "?";
console.log(secretNumber);
document.querySelector(".check").addEventListener("click", () => {
  const guess = parseInt(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent =
      "Enter a number between 1 and 20";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 You guessed it!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //high score function
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😞 Game over!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#990022";
    }
    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😞 Game over!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#990022"; //style must be a string
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  console.log("play again clicked");
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";

  //displays reset score
  document.querySelector(".score").textContent = score;

  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
