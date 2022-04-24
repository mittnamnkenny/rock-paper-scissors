// Welcome Page Section

const welcomePage = document.getElementById("welcome-page");
const playBtn = document.getElementById("play");

playBtn.addEventListener("click", function() {
    welcomePage.classList.add("hide");
})

// Game Page Section

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
let playerCount = 0;
let computerCount = 0;

const characters = [
    rock,
    paper,
    scissors
];

for (let character of characters) {
    character.addEventListener("click", computeWinner);
}

function computeWinner(e) {
    let character = e.target;

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 1) {
        character.classList.add("tie");
        getComputerOpponent(character, "tie").classList.add("tie");
        tie.classList.add("tie");
    } else if (randomNumber == 2) {
        character.classList.add("loss");
        getComputerOpponent(character, "win").classList.add("win");
        loss.classList.add("loss");
        computerScore.textContent = ++computerCount;
        showResult();
    } else {
        character.classList.add("win");
        getComputerOpponent(character, "loss").classList.add("loss");
        win.classList.add("win");
        playerScore.textContent = ++playerCount;
        playerResult.textContent = playerCount;
    }

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

// Result Page Section

const resultPage = document.getElementById("result-page");
const playerResult = document.getElementById("player-result");
const playAgainBtn = document.getElementById("play-again");
const resultMessage = document.getElementById("result-message");

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

playAgainBtn.addEventListener("click", function() {
    resultPage.classList.remove("show");
    playerCount = 0;
    computerCount = 0;
    playerScore.innerHTML = "0";
    computerScore.innerHTML = "0";
})

// Nav Section


const restart = document.getElementById("restart");
const instructions = document.getElementById("instructions");

