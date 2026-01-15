let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#User-score");
const compScorePara = document.querySelector("#Comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again!";
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
    console.log("User choice = ", userChoice);
    
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);
    
    if (userChoice === compChoice) {
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        
        if (userChoice === "rock") {
            // rock vs paper/scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // paper vs scissors/rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // scissors vs rock/paper
            userWin = compChoice === "rock" ? false : true;
        }
        
        showWinner(userWin);
    }
};

// Event listeners for each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});