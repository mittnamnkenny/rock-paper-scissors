const rock = document.getElementById("player-rock");
const paper = document.getElementById("player-paper");
const scissors = document.getElementById("player-scissors");

const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

let playerCount = 0;
let computerCount = 0;

rock.addEventListener("click", function() {
    let randomRock = Math.floor(Math.random() * 3) + 1;

    if (randomRock === 1) {
        computerRock.style.visibility = "visible";
        console.log("tie");
    } else if (randomRock === 2) {
        computerPaper.style.visibility = "visible";
        computerScore.textContent = ++computerCount;
        console.log("loss");
    } else {
        computerScissors.style.visibility = "visible";
        playerScore.textContent = ++playerCount;
        console.log("win");
    }

    setTimeout(function() {
        computerRock.style.visibility = "hidden";
        computerPaper.style.visibility = "hidden";
        computerScissors.style.visibility = "hidden";
    }, 1200);
    
})

paper.addEventListener("click", function() {
    let randomPaper = Math.floor(Math.random() * 3) + 1;

    if (randomPaper === 1) {
        computerPaper.style.visibility = "visible";
        console.log("tie");
    } else if (randomPaper === 2) {
        computerScissors.style.visibility = "visible";
        computerScore.textContent = ++computerCount;
        console.log("loss");
    } else {
        computerRock.style.visibility = "visible";
        playerScore.textContent = ++playerCount;
        console.log("win");
    }

  setTimeout(function() {
    computerRock.style.visibility = "hidden";
    computerPaper.style.visibility = "hidden";
    computerScissors.style.visibility = "hidden";
  }, 1200);

})

scissors.addEventListener("click", function() {
    let randomScissors = Math.floor(Math.random() * 3) + 1;

    if (randomScissors === 1) {
        computerScissors.style.visibility = "visible";
        console.log("tie");
    } else if (randomScissors === 2) {
        computerRock.style.visibility = "visible";
        computerScore.textContent = ++computerCount;
        console.log("loss");
    } else {
        computerPaper.style.visibility = "visible";
        playerScore.textContent = ++playerCount;
        console.log("win");
    }

    setTimeout(function() {
        computerRock.style.visibility = "hidden";
        computerPaper.style.visibility = "hidden";
        computerScissors.style.visibility = "hidden";
    }, 1200);

})