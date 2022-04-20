const rock = document.getElementById("player-rock");
const paper = document.getElementById("player-paper");
const scissors = document.getElementById("player-scissors");

const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");

rock.addEventListener("click", function() {
    computerRock.style.visibility = "visible";
})

paper.addEventListener("click", function() {
    computerPaper.style.visibility = "visible";
})

scissors.addEventListener("click", function() {
    computerScissors.style.visibility = "visible";
})