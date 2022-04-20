const rock = document.getElementById("player-rock");
const paper = document.getElementById("player-paper");
const scissors = document.getElementById("player-scissors");

const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");



rock.addEventListener("click", function() {
    let randomRock = Math.floor(Math.random() * 3) + 1;

    if (randomRock === 1) {
        computerRock.style.visibility = "visible";
        console.log("tie");
    } else if (randomRock === 2) {
        computerPaper.style.visibility = "visible";
        console.log("loss");
    } else {
        computerScissors.style.visibility = "visible";
        console.log("win");
    }
    
})

paper.addEventListener("click", function() {
    let randomPaper = Math.floor(Math.random() * 3) + 1;

    if (randomPaper === 1) {
        computerPaper.style.visibility = "visible";
        console.log("tie");
    } else if (randomPaper === 2) {
        computerScissors.style.visibility = "visible";
        console.log("loss");
    } else {
        computerRock.style.visibility = "visible";
        console.log("win");
    }

})

scissors.addEventListener("click", function() {
    let randomScissors = Math.floor(Math.random() * 3) + 1;

    if (randomScissors === 1) {
        computerScissors.style.visibility = "visible";
        console.log("tie");
    } else if (randomScissors === 2) {
        computerRock.style.visibility = "visible";
        console.log("loss");
    } else {
        computerPaper.style.visibility = "visible";
        console.log("win");
    }

})