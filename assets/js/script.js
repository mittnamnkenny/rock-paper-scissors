// Welcome Page Variables
const welcomePage = document.getElementById("welcome-page");
const playBtn = document.getElementById("play");

// Button to initialise the game
playBtn.addEventListener("click", function() {
    welcomePage.classList.add("hide");
})

// Game Page Variables
const rock = document.getElementById("player-rock");
const paper = document.getElementById("player-paper");
const scissors = document.getElementById("player-scissors");

const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");

const tie = document.getElementById("tie");
const win = document.getElementById("win");
const loss = document.getElementById("loss");

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

// Track player and computer score
let playerCount = 0;
let computerCount = 0;

// Array holding player variables
const characters = [
    rock,
    paper,
    scissors
];

// Add event listeners for player characters
for (let character of characters) {
    character.addEventListener("click", computeWinner);
}

/**
 * Function to calculate winner 
 * based on clicked character above
 */
function computeWinner(e) {

    // rock, paper or scissors
    let character = e.target;

    // Random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 1) {
        character.classList.add("tie");
        getComputerOpponent(character, "tie").classList.add("tie");
        tie.classList.add("tie");
    } else if (randomNumber == 2) {
        character.classList.add("loss");
        getComputerOpponent(character, "win").classList.add("win");
        loss.classList.add("loss");
        // Increment computer score by 1
        computerScore.textContent = ++computerCount;
        showResult();
    } else {
        character.classList.add("win");
        getComputerOpponent(character, "loss").classList.add("loss");
        win.classList.add("win");
        // Increment player score by 1
        playerScore.textContent = ++playerCount;
        playerResult.textContent = playerCount;
    }

    // Classlist reset after 1.2 seconds
    setTimeout(function() {
        character.classList.remove("tie");
        getComputerOpponent(character, "tie").classList.remove("tie");
        tie.classList.remove("tie");
        character.classList.remove("loss");
        getComputerOpponent(character, "win").classList.remove("win");
        loss.classList.remove("loss");
        character.classList.remove("win");
        getComputerOpponent(character, "loss").classList.remove("loss");
        win.classList.remove("win");
    }, 1200);
}

/**
 * Function to return correct computer opponent
 * based on player outcome above
 */
function getComputerOpponent(character, winLoseTie) {
    if (character.id == "player-rock" && winLoseTie == "tie") {
        return computerRock;
    } else if (character.id == "player-rock" && winLoseTie == "win") {
        return computerPaper;
    } else if (character.id == "player-rock" && winLoseTie == "loss") {
        return computerScissors;
    } else if (character.id == "player-paper" && winLoseTie == "tie") {
        return computerPaper;
    } else if (character.id == "player-paper" && winLoseTie == "win") {
        return computerRock;
    } else if (character.id == "player-paper" && winLoseTie == "loss") {
        return computerScissors;
    } else if (character.id == "player-scissors" && winLoseTie == "tie") {
        return computerScissors;
    } else if (character.id == "player-scissors" && winLoseTie == "win") {
        return computerPaper;
    } else {
        return computerRock;
    }
}

// Result Page Variables
const resultPage = document.getElementById("result-page");
const playerResult = document.getElementById("player-result");
const playAgainBtn = document.getElementById("play-again");
const resultMessage = document.getElementById("result-message");

// Button to start a new game and reset score
playAgainBtn.addEventListener("click", function() {
    resultPage.classList.remove("show");
    playerCount = 0;
    computerCount = 0;
    playerScore.innerHTML = "0";
    computerScore.innerHTML = "0";
})

/**
 * Function to show the result page 
 * with the final results of the game
 */
function showResult() {
    if (computerCount == 5) {
        resultPage.classList.add("show");
        if (playerCount < 5) {
            resultMessage.textContent = "You can do better";
        } else if (playerCount < 10) {
            resultMessage.textContent = "Well played";
        } else if (playerCount < 15) {
            resultMessage.textContent = "You are awesome";
        } else {
            resultMessage.textContent="mittnamnkenny's highscore is 47 ;) ";
        }
    }
}

// Nav Variables
const instructions = document.getElementById("instructions");
const restart = document.getElementById("restart");

// Button for showing the game instructions whenever the user wants
instructions.addEventListener("click", function() {
    welcomePage.classList.remove("hide");
    welcomePage.getElementsByTagName("h1")[0].style.display = "none";
    if (playerCount > 0 || computerCount > 0) {
        playBtn.innerHTML = "Continue Playing";
    } else {
        playBtn.innerHTML = "Play";
    }
})

// Button for restart the game whenever the user wants and reset score and layouts
restart.addEventListener("click", function() {
    resultPage.classList.remove("show");
    welcomePage.classList.remove("hide");
    playerCount = 0;
    computerCount = 0;
    playerScore.innerHTML = "0";
    computerScore.innerHTML = "0";
    welcomePage.getElementsByTagName("h1")[0].style.display = "block";
    playBtn.innerHTML = "Play";
})
