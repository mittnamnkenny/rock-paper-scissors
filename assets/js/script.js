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
        rock.classList.add("tie");
        computerRock.classList.add("tie");
    } else if (randomRock === 2) {
        rock.classList.add("loss");
        computerPaper.classList.add("win");
        computerScore.textContent = ++computerCount;
    } else {
        rock.classList.add("win");
        computerScissors.classList.add("loss");
        playerScore.textContent = ++playerCount;
    }

    setTimeout(function() {
        rock.classList.remove("tie");
        computerRock.classList.remove("tie");
        rock.classList.remove("loss");
        computerPaper.classList.remove("win");
        rock.classList.remove("win");
        computerScissors.classList.remove("loss");
    }, 1200);
    
})

paper.addEventListener("click", function() {
    let randomPaper = Math.floor(Math.random() * 3) + 1;

    if (randomPaper === 1) {
        paper.classList.add("tie");
        computerPaper.classList.add("tie");
    } else if (randomPaper === 2) {
        paper.classList.add("loss");
        computerScissors.classList.add("win");
        computerScore.textContent = ++computerCount;
    } else {
        paper.classList.add("win");
        computerRock.classList.add("loss");
        playerScore.textContent = ++playerCount;
    }

    setTimeout(function() {
        paper.classList.remove("tie");
        computerPaper.classList.remove("tie");
        paper.classList.remove("loss");
        computerScissors.classList.remove("win");
        paper.classList.remove("win");
        computerRock.classList.remove("loss");
  }, 1200);

})

scissors.addEventListener("click", function() {
    let randomScissors = Math.floor(Math.random() * 3) + 1;

    if (randomScissors === 1) {
        scissors.classList.add("tie");
        computerScissors.classList.add("tie");
    } else if (randomScissors === 2) {
        scissors.classList.add("loss");
        computerRock.classList.add("win");
        computerScore.textContent = ++computerCount;
    } else {
        scissors.classList.add("win");
        computerPaper.classList.add("loss");
        playerScore.textContent = ++playerCount;
    }

    setTimeout(function() {
        scissors.classList.remove("tie");
        computerScissors.classList.remove("tie");
        scissors.classList.remove("loss");
        computerRock.classList.remove("win");
        scissors.classList.remove("win");
        computerPaper.classList.remove("loss");
    }, 1200);

})