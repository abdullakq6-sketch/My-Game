var userScore = 0;
var compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#User-score");
const compScorePara = document.querySelector("#Comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper","scissors"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You win!";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
     msg.innerText = "You lose.";
     msg.style.backgroundColor = "red";
}
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate computer choice -> Modular;
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) {
        //Draw choice
        drawGame();
    }else {
        var userWin = true;
        if (userChoice === "rock") {
            //secissors, paper
            compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock,scissors
           userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock,paper
           userWin = compChoice === "rock" ? false : true;
        }
         showWinner(userWin);
        }
    };


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
          playGame(userChoice);
    });
});