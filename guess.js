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

const secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", () => {
  const guess = parseInt(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent =
      "Enter a number between 1 and 20";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 You guessed it!";
    document.querySelector("body").style.backgroundColor = "#60b347";

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😞 You lost the game!";
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
      document.querySelector(".message").textContent = "😞 You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#990022";
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  console.log("play again clicked");
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = null;
});
// maniuplate CSS styles using JS
